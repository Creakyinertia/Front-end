import React from 'react'
import Listrenderchild from './Listrenderchild'

function Listrender() {
    const persons=[
        {
        id:1,
        name:'Bruce banner',
        heroName:'Batman',
        power:'Rich'
        },
        {
        id:2,
        name:'Clark kent',
        heroName:'Superman',
        power:'Eye-Laser'
        },
        {
        id:3,
        name:'Tony Stark',
        heroName:'Ironman',
        power:'Iron-suit'
        }
    ]
    const personList=persons.map(person => <Listrenderchild key={person.id} person={person}/>)
    return (
    <div>{personList}</div>
  )
}

export default Listrender