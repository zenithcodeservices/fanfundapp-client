import React from 'react'

const UserContext = React.createContext({
    username: null,
    password: null,
    attributes: {
        email: null // optional
        // other custom attributes 
    }
})

export default UserContext
