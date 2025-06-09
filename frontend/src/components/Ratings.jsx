import React from 'react'
import StarRating from './StarRating'

const Ratings = ({rating}) => {
  return (
    <div className='flex'>
        {Array.from({length: 5}, (_, index) => {
            return <StarRating isRated = {index < rating} />
        })}      
    </div>
  )
}

export default Ratings
