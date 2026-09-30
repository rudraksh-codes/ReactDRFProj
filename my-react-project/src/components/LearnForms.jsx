import {useState} from 'react'

const LearnForms = () => {
    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")

    // const handleFirstNameInput = (e) => { 
    //     setFirstName(e.target.value)
    // }
    // const handleLastNameInput = (e) => { 
    //     setLastName(e.target.value)
    // }
  
    const [formData, setFormData] = useState({
        firstName:'', 
        lastName:''
    })

    const handleFormInput = (e)=> {
        setFormData({
            ...formData, [e.target.name] : e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log("form submitted", formData)
    }

  return (
    <>
        <h2>Forms</h2> 
        <form action="" onSubmit={handleFormSubmit}>
            First Name : <input type="text" name='firstName' value={formData.firstName} onChange={handleFormInput}/>
            <br />
            Last Name : <input type="text" name="lastName" value={formData.lastName} onChange={handleFormInput}/> 
            <br />
            <input type="submit" value="Submit" />
        </form>
    </>
  )
}

export default LearnForms
