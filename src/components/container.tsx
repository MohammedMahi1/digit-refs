import { type ReactNode } from 'react'


type ConatinerProps = {
    children:ReactNode
}


const container = ({children}:ConatinerProps) => {
  return (
    <div className=''>
        {children}
    </div>
  )
}

export default container