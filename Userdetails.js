import React from 'react'
import { useParams } from 'react-router-dom'

export const Userdetails = () => {
  const {userId}=useParams()
    return (
    <div>Userdetails of {userId}</div>
  )
}
