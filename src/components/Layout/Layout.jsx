import 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'
import './Layout.css'

const Layout = () => {
  return (
    <div className='contaienr'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout