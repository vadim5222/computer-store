import React from "react"

const Input = React.forwardRef(({type,placeholder , ...props}, ref) => {
    return(
        <>
         <input 
         className='block w-lg h-14 mb-5 border border-gray-300 p-2.5 rounded-md' 
         type={type}
         placeholder={placeholder}
         ref={ref}
         {...props}
        />
        </>
    )
})

export default Input