import React from 'react';

import {auth, provider} from './firebase'
import { useDispatch, useSelector} from 'react-redux'
import {setUserLogin, setUserLogout, selectUserName, selectEmail} from './features/userSlice'
import './Login.css'

function Login() {
    const dispatch = useDispatch()

    const userName = useSelector(selectUserName)
    const userEmail = useSelector(selectEmail)

    const handleSignIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch(setUserLogin({
                userName: result.user.displayName,
                userEmail: result.user.email
            }))
        })
    }

    const handleSignOut = () => {
        auth.signOut().then(() => {
            dispatch(setUserLogout())
        }).catch((error) => {
            alert(error.message)
        })
    }

    return (
        <div className='login'>
           {
               userName ? (
                   <button className='sign__out' onClick={handleSignOut}>Sign Out</button>
               ) : (
                   <button className='sign__in' onClick={handleSignIn}>Sign In</button>
               )
           }
            
        </div>
    )
}

export default Login
