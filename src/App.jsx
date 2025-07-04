import React, {useEffect} from 'react'
import RouterNavigation from './router/RouterNavigation'
import { generateToken, messaging } from '../firebaseConfig'
import { onMessage } from 'firebase/messaging'

const App = () => {
  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
       console.log(payload)
    })
  },[])
  return (
    <>
     <RouterNavigation />
    </>
  )
}

export default App