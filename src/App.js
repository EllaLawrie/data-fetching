import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
      <div className='bg-gray-300 shadow-md rounded-md p-4 w-full max-w-md'>
        <h1 className='text-4xl font-bold mb-6 flex items-center justify-center'>
          Users List
        </h1>
        <ul>
          {users.map((user) => (
            <li key={user.id} className='mb-2'>
              <strong>{user.name}</strong> ({user.email})
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
