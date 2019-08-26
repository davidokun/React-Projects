import React from 'react'

// This is like a globally available object (or string, number etc)
const authContext = React.createContext({
    authenticated: false,
    login: () => {}
});

export default authContext;
