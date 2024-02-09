//react
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import './App.css'
import LoginPage from "./views/LoginPage/LoginPage"
import HomePage from "./views/HomePage/HomePage"
import { useStateProvider } from "./utils/StateProvider"
import { reducerCases } from "./utils/constants"


function App() {

  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const token = hash.substring(1).split('&')[0].split('=')[1]
      dispatch({ type: reducerCases.SET_TOKEN, token })
    }
  }, [token, dispatch])

  return (
    <div>
      {token ?
        <HomePage token={token} />
        :
        <LoginPage />
      }
    </div>
  )
}

export default App