import React from 'react'

function Listrenderchild({person}) {
  return (
    <h1>I am {person.heroName} and my real name is {person.name} my power is {person.power}</h1>
  )
}

export default Listrenderchild