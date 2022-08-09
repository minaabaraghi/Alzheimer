import React from 'react'

interface dataList {
  list: any;
}
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
    </tr>
  </thead >
  <tbody className="thead-dark">
    
  {(props.list).map((item: any, index: number) => {
        return (<tr key={index}><th scope="row">{index}</th> <td>{item.firstName}</td><td>{item.lastName}</td><td>{item.username}</td> </tr>)

      })}
     
  </tbody>
</table>
    </div>
  )
}
