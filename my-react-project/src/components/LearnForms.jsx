import {useState} from 'react'

const LearnForms = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const handleFirstNameInput = (e) => { 
        setFirstName(e.target.value)
    }
    const handleLastNameInput = (e) => { 
        setLastName(e.target.value)
    }
  

  return (
    <>
        <h2>Forms</h2> 
        <form action="">
            First Name : <input type="text" name='firstName' value={firstName} onChange={handleFirstNameInput}/>
            <br />
            Last Name : <input type="text" name="lastName" value={lastName} onChange={handleLastNameInput}/> 
        </form>
    </>
  )
}

export default LearnForms
