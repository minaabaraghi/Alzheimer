import React from 'react'

interface dataList{
  list:any;
}
export default function CardList(props:dataList) {
  return (
    <div>
        
            {(props.list).map((item:any,index:number)=>{
               return (<div key={index}>{item.name}</div>)
                
            })}
        
    </div>
  )
}
