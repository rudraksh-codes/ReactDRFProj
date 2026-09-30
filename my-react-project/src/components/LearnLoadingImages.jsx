import React from 'react'
import coverImage from '../assets/images/mkb.jpg'
import ajayImage from '../assets/images/ajay.webp'

const LearnLoadingImages = () => {
  return (
    <>
      <h2>Loading Images</h2>
      <img src={coverImage} width={200} /><hr />
      <img src={ajayImage} width={500} />


    </>
  )
}

export default LearnLoadingImages
