import React,{useState,useEffect} from 'react'
import users from '../services/users';
import CardList from '../components/CardList';

export default function UsersList() {
    const [user,setUser]=useState([{id:12,name:"pouria"},{id:20,name:"mahshad"}]);
        useEffect(() => {
      users();
      }, [])
  return (
    <div>
            <CardList list={user} />
    </div>
  )
}
