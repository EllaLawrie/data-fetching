import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const Users = () => {
  const { data, error, isFetching } = useQuery(['users'], async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )
    return response.data
  })

  if (isFetching) {
    return (
      <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
        Loading...
      </div>
    )
  }

  if (error) {
    return (
      <div className='bg-red-200 min-h-screen flex items-center justify-center'>
        Error: {error.message}
      </div>
    )
  }

  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
      <div className='bg-gray-300 shadow-md rounded-md p-4 w-full max-w-md'>
        <h1 className='text-4xl font-bold mb-6 text-center'>Users List</h1>
        <ul>
          {data?.map((user) => (
            <li key={user.id} className='mb-2'>
              <strong>{user.name}</strong> ({user.email})
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Users
