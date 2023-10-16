import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
function RandomQuoteGenerator() {
    const [quotes, setQuotes] = useState([])
    const [quote, setQuote] = useState([])
    const [author,setAuthor]=useState([])
    const num = Math.floor(Math.random()*16)
    useEffect(() => {
        axios.get('https://type.fit/api/quotes').then((res)=>{
        setQuotes(res.data)
    })
},[])
    console.log(quotes)
    const getQuote = () => {
        setQuote(quotes[num].text)
        setAuthor(quotes[num].author)
    }
  return (
    <>
    <h3>{quote}</h3>
    <h5>- {author}</h5>
    <button className='quotebutton' onClick={getQuote}>Get quote</button>
    </>
  )
}
export default RandomQuoteGenerator