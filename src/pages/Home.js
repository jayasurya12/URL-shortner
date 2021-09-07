import React from 'react'
import style from './Home.module.css'
import Login from '../components/Login/Login'
import {useSelector} from 'react-redux'
import Url from '../components/Url-ShortnerPage/Url'
import Table from '../components/table/Table'

const Home = () => {
  const User= useSelector((state)=>state.user)
  return (
    <div className={style.app}>
      {!User?
        (<Login/>):
        (<Url/>)
      }
      {/* <Table/> */}
    </div>
  )
}

export default Home
