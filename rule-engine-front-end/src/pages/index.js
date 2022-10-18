import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Homepage from '../components/Homepage'
import Info from '../components/Info'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/Info/data'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const signedIn = () => {
    alert('User not found.')
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Homepage />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Info {...homeObjThree} />
      <form style={{ textAlign: 'center', display: 'block' }}>
        <p> Sign in here: </p>
        <label>Username</label>
        <input type="text"></input>
        <label>Password</label>
        <input type="password"></input>
        <button className="btn btn-info" onClick={signedIn}>
          Login
        </button>
      </form>
    </>
  )
}

export default Home
