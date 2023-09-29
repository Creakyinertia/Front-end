import React from 'react'

const Destructuring=(props)=>{
    const {name,heroName}=props
    return (
        <h1>hello {name} A.K.A {heroName}</h1>
    )
    }

export default Destructuring