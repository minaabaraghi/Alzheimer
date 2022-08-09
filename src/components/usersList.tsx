import React,{useState,useEffect} from 'react'
import users from '../services/users';
import CardList from '../components/CardList';

export default function UsersList() {
    const [user,setUser]=useState({});
        useEffect(() => {
      users();
      }, [])
  return (
    <div>
            <CardList list={user} />
    </div>
  )
}
