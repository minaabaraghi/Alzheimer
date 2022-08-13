import React from 'react';
import BtnEdit from './BtnEdit';
import BtnDelete from './BtnDelete';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {dataList} from './models';

export default function CardList(props: dataList) {
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
                  <td> <BtnEdit/></td> <td>
                  <BtnDelete/></td>
               </tr>)

      })}
     
  </tbody>
</table>
    </div>
  )
}
