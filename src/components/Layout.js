import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

import 'normalize.css'
import '../assets/css/main.css'

const Layout = ({children}) => {
    return (
        <>
            <NavBar/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout
