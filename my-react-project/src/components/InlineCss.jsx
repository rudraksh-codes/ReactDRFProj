import React from 'react'
import '../assets/css/myAppStyle.css'

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

        <style>
            {`
                .container{
                    background-color: violet;
                    width : 100px; 
                    height : 100px;
                }
            `}
        </style>

        <h3>Apply InLine CSS</h3>
        <p style={{ fontSize: "20px", color: "red", fontWeight: 900 }}>this is a paragraph</p>
        <h2 style={style.h2Text}>this is an h2 element</h2>
        <div style={style.container}>
        </div>
        <hr />


        <h3>Internal CSS apply</h3>
        <div className='container'></div>
        <hr />


        <h3>External CSS (THE CSS WE APPLY)</h3>
        <div className="yellowbox">

        </div>
        <div className='yellowtext'>Yellow Text</div>

        
    </>
  )
}

export default InlineCss
