import {useState, useRef} from 'react'

const LearnUseRef = () => {
  
    const [name, setName] = useState('')
    
    const refElement = useRef('')
    const prevNameRefElement = useRef('')

    console.log(refElement)

    const clearText = () => {
        setName("")
        refElement.current.focus()
    }

    const handleInput = (e) => {
        setName(e.target.value)

        prevNameRefElement.current = name
    }

    return (
        <>
            <h1>Learn useRef</h1>
            <input ref={refElement} type="text" value={name} onChange={handleInput}/>
            <button onClick={clearText}>Clear</button>
            <br />
            <p>previous name :{prevNameRefElement.current}</p>

        </>     

  )
}

export default LearnUseRef
