import React from 'react'

const AuthContext = React.createContext({
  authInfo: {},
  setAuthInfo: (val) => val,
})

export default AuthContext