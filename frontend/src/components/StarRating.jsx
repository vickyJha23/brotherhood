import React from 'react'
import { Star } from 'lucide-react';


const StarRating = ({isRated}) => {
  return (
      <Star size={18} stroke='none' fill= {isRated ? "#D3AF37": "gray"} />
  )
}

export default StarRating
