import React from 'react'

const LearnMap = () => {
    const names = ["Rudra", "surya", "gaurav", "aman"]; 

  return (
    <>
        <h1>MapFunction</h1>
        <ul>
            {names.map((name, idx) => <li key={idx}>{name}</li>)} 
        </ul>
    </>
  )
}

export default LearnMap
 