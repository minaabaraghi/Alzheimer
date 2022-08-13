import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import {dataList} from './models';
import { toast } from "react-toastify";
import deleteUser from '../services/deleteUser';
import {Navigate} from "react-router-dom";
export default function CardList(props: dataList) {
  const onDelete=(id:any)=>{
    //(props.list).filter((item:any)=>item._id !== id);
    console.log(id,'del');
    deleteUser(id).then(result => {
          
      if (result) {
        toast.success('کاربر با موفقیت حذف شد');
        return <Navigate to="/" replace={true}/>;
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
    
  {(props.list).map((item: any, index: number) => {
      index+=1;
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
