import React from 'react'

const Input = ({type, name, ...props}) => {
  return (
            <div className="flex-1 flex flex-col gap-1">
              <p></p>
              <input
                className="border rounded py-2 px-3"
                type={type}
                name={name}
                {...props}
              />
            </div>
  )
}

export default Input