import { React, useState } from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
        <div className="loginScreen_background">
          <img className="loginScreen_logo"
          src="https://i.imgur.com/2K69lMU.png"
          alt="papadflix"/>
          <button onClick={()=>setSignIn(true)} className="loginScreen_button ">
            Sign In
          </button>

          <div className='loginScreen__gradient'/>

        </div>
        <div className='loginScreen_body'>
            {signIn ? (
                <SignupScreen/>
            ) : (
                <>
                <h1>
                    Munch a papad with a movie for every emotion
                </h1>
                <h2>
                    Watch only where you can also eat a papad.
                </h2>
                <h3>
                    Ready with your papad and aachar? 
                     Enter your email to create your profile.
                </h3>
                <div className="loginScreen_input">
                    <form>
                        <input  className="loginScreen_input" type="email" placeholder='Enter your email Address'/>
                        <button className='loginScreen_getStarted'  onClick={()=>setSignIn(true)}>
                            Get Started
                        </button>
    
                    </form>
                </div>
                </>

            )}
           
        </div>
    </div>
  )
}

export default LoginScreen