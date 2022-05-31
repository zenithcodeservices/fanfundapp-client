import React from 'react'

const UserContext = React.createContext({
    web3Provider: null,
    address: '0x0',
    connect: () => {},
    disconnect: () => {},
    username: null,
    attributes: {
        email: null,
        name: null,
        family_name: null,
    },
    img: null,
    uriList: [],
    userNFTs: []
})

export default UserContext
