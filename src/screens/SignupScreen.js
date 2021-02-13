import React, { useRef } from 'react'
import { auth } from '../firebase'
import './SignupScreen.css'
function SignupScreen() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const register = (e) =>{
       e.preventDefault()
       auth.createUserWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
       ).then((authuser)=>{
           console.log(authuser)
       })
       .catch((error)=>{
                alert(error.message)
       })

    }
    const signIn = (e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(emailRef.current.value,passwordRef.current.value)
        .then((authuser)=>{
            console.log(authuser)
        })
        .catch((e)=>{
            alert(e);
        })
    }
    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder='Email'  type='email'/>
                <input ref={passwordRef} placeholder='Password' type='password'/>
                <button className='signIn' type='submit' onClick={signIn}>Sign In</button>
                <h4>New to Netflix ? <span onClick={register}>Sign Up now </span></h4>
            </form>
        </div>
    )
}

export default SignupScreen
