import React from 'react'
import { Outlet,useSearchParams } from 'react-router-dom'

export const Users = () => {
    const [searchParams,setSearchParams]=useSearchParams()
    const showActiveUsers=searchParams.get('filter')==='active'

  return (
    <div>
        <h1>user1</h1>
        <h1>user2</h1>
        <h1>user3</h1>
        <Outlet />
        <div>
            <button onClick={()=>{setSearchParams({filter:'active'})}}>Active users</button>
            <button onClick={()=>{setSearchParams({})}}>Reset filter</button>
        </div>
        {showActiveUsers?(<div>Show active users</div>):(<div>Show all users</div>)}
    </div>
  )
}
