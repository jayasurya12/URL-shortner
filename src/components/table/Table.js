import React,{useState,useEffect} from 'react'
import {Check,Edit,Close} from '@material-ui/icons'
import {TableContainer, Table,TableBody,TableCell,TableHead,Paper, 
    TableRow,Container,IconButton,Avatar} from '@material-ui/core'
import style from './Table.module.css' 
import axios from 'axios'

const OldData = ({data,removeData}) => {
    const postRoute='https://url-shortners1.herokuapp.com/email/remove';
    const remove= async(datas)=>{
        const id={
            _id:datas._id
        }
        const removed=await axios.post(postRoute,id,{
            headers:{
                ContentType:'application/json'
            }
        })

        removeData(removed)
    }
    return (
        <div className={style.table}>
                <TableContainer component={Paper}>
                    <Table aria-lable='simple table' className={style.tableData}>
                        <TableHead>
                            <TableRow className={style.tableRow}>
                                <TableCell variant='h4'><Avatar alt="" src={data[0]?.photoUrl}/></TableCell>
                                <TableCell align='right' variant='h4'>Your Long-URL</TableCell>
                                <TableCell align='right' variant='h2' style={{textAlign:"center"}}>Shorted-URL</TableCell>
                                <TableCell align='right' variant='h4' style={{textAlign:"center"}}>Created-Date</TableCell>
                                <TableCell align='right' variant='h4'  style={{textAlign:"center"}}>Created-Email</TableCell>
                                <TableCell align='right' variant='h4'>Remove</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data?.map((element,index)=>{
                                return<TableRow key={index}>
                                    <TableCell  style={{textAlign:'center'}} component='th' scope='row'>{index}</TableCell>
                                    <TableCell align='right' className={style.longUrl} ><a href={element?.longUrl} target='__blank' > Your Long URL</a></TableCell>
                                    <TableCell align='right' className={style.shorted}><a href={element?.urlCode} target='__blank'> {element?.urlCode}</a></TableCell>
                                    <TableCell align='right' style={{alignItems:'center'}}>{new Date().toDateString(element?.date)}</TableCell>
                                    <TableCell align='right'>{element?.email}</TableCell>
                                    <TableCell align='right'><IconButton onClick={()=>remove(element)}><Close/></IconButton></TableCell>
                                </TableRow>
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
        </div>
    )
}

export default OldData
