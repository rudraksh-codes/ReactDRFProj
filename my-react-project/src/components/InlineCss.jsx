import React from 'react'

const InlineCss = () => {

    //css object
    const style = {
        h2Text : {
            fontWeight : 500, 
            color : "green"
        }, 

        container : {
            backgroundColor : 'blue',    
            height : "50px", 
            width : "50px"
        }
    }

  return (
    <>
        <h3>Apply InLine CSS</h3>
        <p style={{ fontSize: "20px", color: "red", fontWeight: 900 }}>this is a paragraph</p>
        <h2 style={style.h2Text}>this is an h2 element</h2>
        <div style={style.container}>

        </div>
    </>
  )
}

export default InlineCss
