'use client'

import UserLogin from '@/components/Forms/UserLogin'
import UserRegister from '@/components/Forms/UserRegister'
import React, { useState } from 'react'

const Auth = () => {

 const [ auth, setAuth ] = useState('login')

  return (
    <div className='bg-secondary-50'>
        <div className="container py-16">
            {auth === 'login' ? <UserLogin setAuth={setAuth} /> : <UserRegister  setAuth={setAuth} />}
        </div>

    </div>
  )
}

export default Auth