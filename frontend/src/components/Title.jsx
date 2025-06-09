import React from 'react'

const Title = (prop) => {
 const {title, ...restProp} = prop;
 
  return (
       <h2 {...restProp}>
            <span>
                {title}
            </span>
            <span className='inline-block w-10 h-1 bg-red-400 mt-2 rounded-[4px]'></span>
       </h2>

  )
}

export default Title
