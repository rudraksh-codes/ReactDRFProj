import React from 'react'
import ChildB from './ChildB'

const ChildA = (props) => {
  return (
    <>
        <ChildB data_dash={props.data}/>
    </>
  )
}

export default ChildA
