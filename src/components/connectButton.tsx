import UserContext from '../../lib/userContext'

import styles from './ConnectButton.module.css'

export default function ConnectButton () {
  const connectedClassName: string = [
    styles['connect-button'],
    styles['connect-button-connected'],
  ].join(' ')

  return (
    <UserContext.Consumer>
      {({web3Provider, address, connect, disconnect}: {web3Provider: any, address: any, connect: any, disconnect: any}) => (
        <>
          {web3Provider ? (
            <div className={connectedClassName}
              onClick={disconnect}>
              <div>
                {address}
              </div>
            </div>
          ) : (
            <div className={styles['connect-button']}
              onClick={connect}>
              <div>
                Connect Wallet
              </div>
            </div>
          )}
        </>
      )}
    </UserContext.Consumer>
  )
}
