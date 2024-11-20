import React, { useEffect } from 'react'
import { IUser } from '../../../domain/schema/users/types';

const Details = ({user}:{
    user: IUser
}) => {
    const { id, username, name, passwordHash } = user
    useEffect(() => {
        console.log('componente renderizado');
        return () => {
            console.log('componente desmontado');
        }
    },[])
  return (
    <div>
      <ul className='space-y-2 text-slate-300 text-xl'>
        <li><span className='font-bold text-white'>Id:</span> {id}</li>
        <li><span className='font-bold text-white'>Username:</span> {username}</li>
        <li><span className='font-bold text-white'>Name:</span> {name}</li>
        <li><span className='font-bold text-white'>Password:</span> {passwordHash}</li>
      </ul>
    </div>
  )
}

export default Details
