import React from 'react'
import style from './Login.module.css';
import {Button, Typography} from '@material-ui/core'
import {provider,auth} from '../../firebase'
import {useDispatch} from 'react-redux'
import {User} from '../../store/action/action'
import axios from 'axios';

const Login = () => {
    const dispatch=useDispatch()
    const signClick= async()=>{
        try {
            const data=await auth.signInWithPopup(provider)
            const userData={
                email:data.user._delegate.email,
                displayName:data.user._delegate.displayName,
                photoUrl:data.user._delegate.photoURL
            }
            dispatch(User(userData))
           
            const email={
                email:userData
            }
            console.log(email);
            const postUrl='https://url-shortners1.herokuapp.com/url/longData'
            await axios.post(postUrl,email,{headers:{ContentType:"application/json"}})
        } catch ({error}) {
            console.log(error);
        }
    }
    return (
        <div className={style.mainUrl}>
            <div className={style.login}>
                <div className={style.img}>
                    <img src={"https://market.enonic.com/vendors/enonic/com.enonic.lib.urlredirect/_/attachment/inline/6e05932f-0ace-43d2-973c-de4021fde556:c3beeb7b93a48dc34c4bc6d6c7803591bc2a92ef/url.svg"} alt=""/>
                </div>
                <div className={style.button}>
                    <Button className={style.btn} onClick={signClick}>Sign In</Button>
                </div>
                <div className={style.url}>
                    <Typography variant='h6' className={style.urlName}>URL SHORTNER</Typography>
                </div>
            </div>
        </div>
    )
}

export default Login
