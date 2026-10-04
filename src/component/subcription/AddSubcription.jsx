import React, { useState } from 'react'
import "../template/AddSubcription.css"
import ErrorModel from './ErrorModel.jsx'

function AddSubcription(props) {

    const [name, setName] = useState("")
    const [pin, setPin] = useState("")
    
    // to maintain Error
    const [error, setError] = useState(null)
   
    const onNameHandler = (event)=>{
        setName(event.target.value)
        console.log(event.target.value)
    }
    const onPinHandler = (event)=>{
        setPin(event.target.value)
        console.log(event.target.value)
    }
    const onSubmitHandler = (event)=>{
        event.preventDefault()

        // add validation on name and pin-code
         if(name.trim().length === 0 && pin.trim().length === 0){
            console.log("Your data is not valid any more!..")
            setError({
                title: "Invalid Data!...",
                content: "Your data is not valid"
            })
            return
        }

        // pin-code should be greter than 5 and always positive
        if(pin.length !== 5 || pin < 0 ){
            console.log("PIN code is not valid, it should be 5-digit and greater than 0")
            setError({
                title: "Inavalid PIN",
                content: "PIN code is not valid, it should be 5-digit and greater than 0"
            })
            return
        }

        console.log("name:-", name)
        console.log("PIN code :-", pin)

        //collect data and submit to app,jsx
        props.addSubscription(name, pin) 
        

        // clear data
        setName("")
        setPin("")

        
    }


  return (

   
    <div className='cal'>
         {/* {error &&(
             <ErrorModel
             title = {error.title}
             content = {error.content}
             onClose = {()=>setError(null)} />
        )} */}
        <form action="" onSubmit={onSubmitHandler}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={onNameHandler}/>
            <label htmlFor="pincode">PIN-code</label>
            <input type="number" id='pincode' value={pin} onChange={onPinHandler} />
            <button type='submit'>Add Subscriber</button>
        </form>
        {error &&(
             <ErrorModel
             title = {error.title}
             content = {error.content}
             onClose = {()=>setError(null)} />
        )}
    </div>

  )
}

export default AddSubcription