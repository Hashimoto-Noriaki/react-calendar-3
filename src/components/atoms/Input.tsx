import {ComponentProps } from 'react-router-dom'

export const Input = (props: ComponentProps<"input">) => {
  return (
    <input
        {...props}
        className="w-full border-4 border-solid border-lime-800 p-4"            
    />
  )
}