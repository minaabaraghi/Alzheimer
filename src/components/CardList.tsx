import React,{useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import {dataList} from './models';
import { toast } from "react-toastify";
import deleteUser from '../services/deleteUser';
import {Navigate} from "react-router-dom";
export default function CardList({list}: dataList) {
  const [userList,setUserList]=useState(list)
  console.log(userList,'userList');
  console.log(list,'list');
  
  const onDelete=(id:any)=>{
    setUserList((userList).filter((item:any)=>item._id !== id));
    deleteUser(id).then(result => {
          
      if (result) {
        toast.success('کاربر با موفقیت حذف شد');
              }

    })
    
  }
  return (
    <div>
<br/>
      
      <table className="table ">
  <thead className='thead-light'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">userName</th>
      <th scope="col"><EditTwoToneIcon/></th>
      <th scope="col"><DeleteOutlineIcon/></th>
    </tr>
  </thead >
  <tbody className="thead-dark">
    
  {(list).map((item: any, index: number) => {
      index+=1;
      console.log(item,'itemm');
      
        return (<tr key={++index}>
                  <th scope="row">{index}</th> 
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.username}</td>
                  <td> <EditIcon/></td> <td>
                  <DeleteIcon onClick={()=>onDelete(item._id)}/></td>
               </tr>)

      })}
     
  </tbody>
</table>
    </div>
  )
}
