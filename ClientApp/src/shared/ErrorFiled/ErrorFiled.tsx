import React, { FC } from 'react'

interface IErrorFiled {
    text: string
    fontSize: number
}

const ErrorFiled: FC<IErrorFiled> = ({text, fontSize}) => {
  return (
    <div className='error-filed'>
        <p style={{fontSize}} className="error-filed__text">{text}</p>
    </div>
  )
}

export default ErrorFiled