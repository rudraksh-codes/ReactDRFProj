import React from 'react'
import ChildC from './ChildC'

const ChildB = (props) => {
  return (
    <>
        <ChildC data_dash_dash = {props.data_dash} />
    </>
  )
}

export default ChildB
