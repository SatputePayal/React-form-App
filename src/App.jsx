import { useState } from 'react'
import './App.css'
import AddSubcription from './component/subcription/AddSubcription'
import SubscriptionList from './component/subcription/SubscriptionList'
import ErrorModel from './component/subcription/ErrorModel'

function App() {
  
   // to maintain previous state
      const[subscription, setSubscription] = useState([]) 
      const AddsubscriptionHandler = (name, pin)=>{
        setSubscription((prevState)=>{
          return [
            ...prevState,
             {

              name: name,
              pin : pin
             }
          ]
        })
      }


  
      

  return (
    <>
     <AddSubcription  addSubscription = {AddsubscriptionHandler} ErrorModel = {ErrorModel}/>
     <SubscriptionList Subscriber = {subscription}/>
   
    </>
  )
}

export default App
