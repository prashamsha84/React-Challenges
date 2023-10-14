 
 import { useState } from "react"

export default function BasicForm(){

    const [info, setInfo] = useState({
        first_Name:"",
        last_Name:"",
        email:""
    })
    const [isSubmitted, setIsSubmitted] =useState(false)

    const [isValid, setIsValid] = useState(false)

    function handleButton(event){
       event.preventDefault();
       if( info.first_Name && info.last_Name && info.email){
        setIsValid(true)
       }
       setIsSubmitted(true)
    }

    function handleChange(event){
        const {name, value} = event.target
        setInfo((preinfo)=>({
            ...preinfo,
            [name]: value
        }))

    }
    return(
        <form className="basic-form" onSubmit={handleButton}>
            <h1>Basic Form</h1>
           {isSubmitted && isValid ? <h3>Thank you for registering</h3>:null}
        <input 
        type="text" 
        placeholder="First Name"
        name="first_Name"
        value={info.first_Name}
        onChange={handleChange}/>
        {isSubmitted && !info.first_Name ? <span>Please enter first name </span> :null }

        <input 
        type="text"
        placeholder="Last Name"
        name="last_Name"
        value={info.last_Name}
        onChange={handleChange}/>
        {isSubmitted && !info.last_Name?  <span>Please enter last name</span> :null}


        <input 
        type="email"
        placeholder="Email"
        name="email"
        value={info.email}
        onChange={handleChange}/> 
        {isSubmitted && !info.email ? <span>Please enter email</span> :null}

        <button className="btn">Register</button>
        {isSubmitted && !isValid ? <span>Fill all the field</span>: null}  
        </form>
    )
}