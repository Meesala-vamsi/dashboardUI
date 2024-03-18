import {useState} from 'react'
import { FcGoogle } from "react-icons/fc";
import {signInWithGoogle} from '../../Firebase'
import { IoLogoApple } from "react-icons/io5";
import {auth} from '../../Firebase'

import {useNavigate,Navigate} from 'react-router-dom'

import {NavLink} from 'react-router-dom'
import Cookies from 'js-cookie'


import {createUserWithEmailAndPassword} from 'firebase/auth'

import './index.css'

const Login=()=>{
    const navigate = useNavigate()
    const [loggedIn,setLoggedIn] = useState(false)
    const [loginUser,setLoginUser] = useState('')
    const [loginPassword,setLoginPassword]=useState('')

    const login= async (event)=>{
        event.preventDefault()
        try{
        const user = await createUserWithEmailAndPassword(auth,loginUser,loginPassword)
        console.log(user)
        }catch(error){
            console.log(error.message)
        }

        const abc = auth.onAuthStateChanged((user)=>{
            if(user){
                navigate('/home')
            }else{
                navigate('/')
            }
        })
    return ()=>abc()
    }

    return(
        <div className='login-container'>
            <div className='banner-container'>
                <h1>Board.</h1> 
            </div>
                <h1 className='main-heading'>Board.</h1> 
                <div className='login-details-container'>
                    <div className='container1'>
                    <h1 className=''>Sign In</h1>
                    <div className='signin-btn-container'>
                        <button onClick={signInWithGoogle} className='signin-button'> <FcGoogle className='icon'/>Sign In Google</button>
                        <button onClick={signInWithGoogle} className='signin-button'> <IoLogoApple className='icon'/>Apple</button>
                    </div>
                    <form onSubmit={login}>
                        <div className='input-container'>
                            <label htmlFor='email' className='label-element'>Email</label>
                            <input id='email' type='text' className='input-element' onChange={(event)=>{setLoginUser(event.target.value)}}/>
                        </div>

                        <div className='input-container'>
                            <label htmlFor='password' className='label-element'>Password</label>
                            <input id='password' type='password' className='input-element' onChange={(event)=>{setLoginPassword(event.target.value)}}/>
                        </div>

                        <button type='submit' className='submit-btn'>SignIn</button>
                        <div className='register-text-container'>
                            <p>Don't have an account?</p>
                            <NavLink to = '/register' className='nav-link'>Register here</NavLink>
                        </div>
                    </form>
                    </div>
                </div>
                 
            </div>
    )

}

export default Login