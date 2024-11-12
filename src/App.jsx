import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import appwriteauthService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
import Service from "./appwrite/config"

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  

    useEffect(() => {
        console.log(import.meta.env); // Logs environment variables upon component mount
        console.log(appwriteauthService.createAccount)
        console.log(Service.createPost())
    }, []);

  useEffect(() => {
    appwriteauthService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gradient-to-r from-teal-400 to-blue-500'>

      <div className='w-full block'>
        <Header />
        <br/> <br/>
        <main>
        TODO:  <br/> <br/> <br/> <Outlet />
        </main>
        <br/>
        <br/>
        <br/>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
