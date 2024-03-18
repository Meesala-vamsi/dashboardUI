import { useEffect, useState } from "react"
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../Firebase'

import {Redirect} from 'react-router-dom'

import './index.css'

const Register=()=>{
    const [registerUser,setRegisterUser]=useState('')
    const [registerPassword,setRegisterPassword] = useState('')
   

    // useEffect(()=>{
      
    //         const abc = auth.onAuthStateChanged((user)=>{
    //             if(user){
    //                 seta(user)
    //             }else{
    //                 console.log('not ')
    //             }
    //         })
    //     return ()=>abc()
    
    // },[])



    const register=async(event)=>{
        event.preventDefault()
        console.log('hello')
        try{
            const user = await createUserWithEmailAndPassword(auth,registerUser,registerPassword)
            
        }catch(error){
            console.log(error.message)
        }

        const abc = auth.onAuthStateChanged((user)=>{
            if(user){
                console.log('logged')
            }else{
                console.log('not ')
            }
        })
    return ()=>abc()
    }

    return(
        <div className="signup-main-container">
        <div className="signup-container">
            <h1>Sign Up</h1>
            <form onSubmit={register}>
                <div className="input-container">
                    <label htmlFor='email' className="label-element">Email</label>
                    <input id='email' type='text' className='input-element' onChange={(event)=>{setRegisterUser(event.target.value)}}/>
                </div>
                <div className="input-container">
                    <label htmlFor='password' className="label-element">Password</label>
                    <input id='password' type='password' className='input-element' onChange={(event)=>{setRegisterPassword(event.target.value)}}/>
                </div>
                <button type="submit" className="submit-btn">Sign Up</button>
            </form>
        </div>
        </div>
    )
}

export default Register