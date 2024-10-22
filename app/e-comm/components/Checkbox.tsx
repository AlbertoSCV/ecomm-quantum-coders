import React from 'react'

interface Props{
    title: string
}

const Checkbox: React.FC<Props> = ({title}) => {
  return (
    <label className="flex items-center">
        <input type="checkbox" className="checkbox checkbox-sm" />
        <span className="ml-2">{title}</span>
    </label>
  )
}

export default Checkbox