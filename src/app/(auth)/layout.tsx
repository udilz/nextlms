import React from 'react'

export default function Layout({children} : React.PropsWithChildren) {
  return (
    <main className='h-screen flex justify-center items-center'>
      <div className='w-[280px] space-y-6'>{children}</div>
    </main>
  )
}
