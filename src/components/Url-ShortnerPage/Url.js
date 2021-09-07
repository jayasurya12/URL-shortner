import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Button} from '@material-ui/core'
import {useSelector} from 'react-redux'
import style from './Url.module.css'
import {Send} from '@material-ui/icons'
import Table from '../table/Table'

const Url = () => {
    const [enterUrl, setEnterUrl]=useState('')
    const [newUrl, setNewurl]=useState([])
    const emailVerification=useSelector((state)=>state.user);
    const [current,setCurrent]=useState()
    
////////
useEffect(async() => {
    const postRoute='https://url-shortners1.herokuapp.com/email/data'
    const {data}=await axios.post(postRoute,emailVerification,{
      headers:{
          ContentType:'application/json'
      }
    })
    setNewurl(data)    
}, [enterUrl])
////////////

    const handleChange=(event)=>{
      const inputUrl=event.target.value;
      setEnterUrl(inputUrl)
    }
    
    const handleClick=async()=>{
      let link='https://url-shortners1.herokuapp.com/url/longData'
      const userUrl={
        urlLink:enterUrl,
        email:emailVerification,
      }
      const {data}= await axios.post(link,userUrl,{headers:{ContentType:"application/json"}})
      setCurrent(data)
      setEnterUrl("")
    }
   const remove=({data})=>{
     setEnterUrl(data)
     setEnterUrl("")
     setCurrent("")
   }
   console.log(current);
    return (
        <div className={style.url}>
          <div className={style.header}>
          <p>URL SHORTNER</p>
          </div>
          <form onSubmit={(e)=>e.preventDefault()} className={style.form}>
          <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png'/>
            <input type="text" name='URL-link' onChange={handleChange} placeholder='Pase Your URL' value={enterUrl} className={style.inputBox}/>
            <Button type='submit' onClick={handleClick} endIcon={<Send/>}>SEND</Button>
          </form>
            <div className={style.current} >
              {current?<a href={current.urlCode} target='__blank'>{current.urlCode}</a>:null}
            </div>
              {newUrl.length>=1?
                <div className={style.tableContainer}>
                <Table data={newUrl} removeData={remove}/>
                </div>
              :null}  
        </div>
    )
}

export default Url
