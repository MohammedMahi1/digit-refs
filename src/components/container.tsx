import { type ReactNode } from 'react'


type ConatinerProps = {
    children:ReactNode
}


const Container = ({children}:ConatinerProps) => {
  return (
    <div className='px-40'>
        {children}
    </div>
  )
}

export default Container