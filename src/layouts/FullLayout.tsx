import React, { useCallback, useEffect, useReducer, useState } from "react";
import { Container } from "reactstrap";
import Header from "./header/Header";
import Sidebar from "./sidebars/vertical/Sidebar";
import Nav from '../../components/Nav'
import { Hub, Auth } from 'aws-amplify';
import styles from "./FullLayout.module.css"
import Link from 'next/link'
import LoadingSpin from "react-loading-spin"
import WalletConnectProvider from '@walletconnect/web3-provider'
import { providers, Contract, utils, BigNumber } from 'ethers'
import WalletLink from 'walletlink'
import Web3Modal from 'web3modal'
import { fetchJson } from '@ethersproject/web'
import { ethers } from "ethers"

import type StateType from '../types/StateType'
import type ActionType from '../types/ActionType'

import nftABI from '../lib/contracts/nftABI'

import UserContext from "../../lib/userContext";

const INFURA_ID = "2c0bd8cad65a82de37d96ca2f70065a3"

import Amplify, { Storage } from "aws-amplify";
Storage.configure({ track: true, level: "private" });


const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: INFURA_ID, // required
    },
  },
  'custom-walletlink': {
    display: {
      logo: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',
      name: 'Coinbase',
      description: 'Connect to Coinbase Wallet (not Coinbase App)',
    },
    options: {
      appName: 'Coinbase', // Your app name
      networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
      chainId: 1,
    },
    package: WalletLink,
    connector: async (_: any, options: any) => {
      const { appName, networkUrl, chainId } = options
      const walletLink = new WalletLink({
        appName,
      })
      const provider = walletLink.makeWeb3Provider(networkUrl, chainId)
      await provider.enable()
      return provider
    },
  },
}

let web3Modal: Web3Modal
if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    network: 'mainnet', // optional
    cacheProvider: true,
    providerOptions, // required
  })
}

const initialState: StateType = {
  provider: null,
  web3Provider: null,
  address: null,
  chainId: null,
  // userNFTs: null,
  // listedUriList: null,
  // uriList: null,
  // championsFarmItems: null,
  connected: false,
  username: null
  //userChampion: null,
}

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'SET_WEB3_PROVIDER':
      return {
        ...state,
        provider: action.provider,
        web3Provider: action.web3Provider,
        address: action.address,
        chainId: action.chainId,
      }
    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.address,
      }
    case 'SET_CHAIN_ID':
      return {
        ...state,
        chainId: action.chainId,
      }
    case 'RESET_WEB3_PROVIDER':
      return initialState
    default:
      throw new Error()
  }
}

 const contracts = {
  nft: { addy: '0x4bd2a30435e6624CcDee4C60229250A84a2E4cD6' }
}


const FullLayout = ({ children }) => {

  const userContext: any = {
    web3Provider: null,
    address: '0x0',
    connect: function () {},
    disconnect: function () {},
    connected: false,
    username: null,
    attributes: {
      email: null,
      name: null,
      family_name: null,
    },
    img: null,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState(null)

  // eslint-disable-next-line no-use-before-define
  const {
    provider,
    web3Provider,
    address,
    chainId,
    connected,
  } = state


  const connect = useCallback(async function () {
    // This is the initial `provider` that is returned when
    // using web3Modal to connect. Can be MetaMask or WalletConnect.
    const provider = await web3Modal.connect()

    // We plug the initial `provider` into ethers.js and get back
    // a Web3Provider. This will add on methods from ethers.js and
    // event listeners such as `.on()` will be different.
    const web3Provider = new providers.Web3Provider(provider)

    const signer = web3Provider.getSigner()
    const address = await signer.getAddress()
    console.log(address)

    const network = await web3Provider.getNetwork()

    dispatch({
      type: 'SET_WEB3_PROVIDER',
      provider,
      web3Provider,
      address,
      chainId: network.chainId,
    })

    if (network.chainId == 56) {
      const nftContract = new Contract(contracts.nft.addy, nftABI, web3Provider)
      
    }
  }, [])

  const disconnect = useCallback(
    async function () {
      await web3Modal.clearCachedProvider()
      if (provider?.disconnect && typeof provider.disconnect === 'function') {
        await provider.disconnect()
      }
      dispatch({
        type: 'RESET_WEB3_PROVIDER',
      })
    },
    [provider]
  )

  useEffect(() => {
    onPageRendered();
  }, []);

  const onPageRendered = async () => {
    getProfilePicture();
  };

  const getProfilePicture = () => {
    Storage.get(`${UserContext.username}-avatar.png`)
      .then(url => {
        var myRequest = new Request(url);
        fetch(myRequest).then(function(response) {
          if (response.status === 200) {
            console.log(url)
            setTimeout(() => {
              setImage(url);
              userContext.img = url
              console.log(userContext.img)
            }, 10);
          }
        });
      })
      .catch(err => console.log(err));
  };

  const [image, setImage] = useState("");


  React.useEffect(() => {

    if (web3Modal.cachedProvider) {
      connect()
    }

    let updateUser = async() => {
      try {
        let user = await Auth.currentAuthenticatedUser()
        setUser(user)
        const username = user.username
      } catch {
        setUser(null)
      }
    }

    Hub.listen('auth', updateUser) // listen for login/signup events
    updateUser() // check manually the first time because we won't get a Hub event
    return () => Hub.remove('auth', updateUser) // cleanup
  }, [connect]);


   // A `provider` should come with EIP-1193 events. We'll listen for those events
  // here so that when a user switches accounts or networks, we can update the
  // local React state with that new information.
  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        // eslint-disable-next-line no-console
        dispatch({
          type: 'SET_ADDRESS',
          address: accounts[0],
        })
      }

      const handleChainChanged = (accounts: string[]) => {
        // eslint-disable-next-line no-console
        dispatch({
          type: 'SET_ADDRESS',
          address: accounts[0],
        })
      }

      const handleDisconnect = (error: { code: number; message: string }) => {
        // eslint-disable-next-line no-console
        disconnect()
      }

      provider.on('accountsChanged', handleAccountsChanged)
      provider.on('chainChanged', handleChainChanged)
      provider.on('disconnect', handleDisconnect)

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged)
          provider.removeListener('chainChanged', handleChainChanged)
          provider.removeListener('disconnect', handleDisconnect)
        }
      }
    }
  }, [provider, disconnect])


  userContext.web3Provider = web3Provider
  userContext.address = address
  userContext.connect = connect
  userContext.disconnect = disconnect
  userContext.connected = connected


  const showMobilemenu = () => {
    setOpen(!open);
  };

  return (
    <>
    <UserContext.Provider value={userContext}>
    {user !== null ? (
    <main>
      <div className="pageWrapper d-md-block d-lg-flex">
        {/******** Sidebar **********/}
        <aside
          className={`sidebarArea shadow bg-gray ${
            !open ? "" : "showSidebar"
          }`}
        >
          <Sidebar showMobilemenu={() => showMobilemenu()} />
        </aside>

        {/********Content Area**********/}

        <div className="contentArea">
          {/********header**********/}
          <Header showMobmenu={() => showMobilemenu()} />

          {/********Middle Content**********/}
          <Container className="p-4 wrapper" fluid>
            <div>{children}</div>
          </Container>
        </div>
      </div>
    </main>
    ) : (
      <main>
{/*       <div className={styles['centering-div']}>
        <Link href="/">
          <div className={styles['dialog-box']}>
            <div className={styles['dialog-box-innner']}>
              Restricted Access
            </div>
          </div>
        </Link>
      </div> */}

      <div className={styles['centering-div']}>
        <div className={styles['dialog-box']}>
          <LoadingSpin primaryColor="#27E73B" />    
        </div>
      </div>

      </main>
    )}
    </UserContext.Provider>
    </>
  );
};

export default FullLayout;
