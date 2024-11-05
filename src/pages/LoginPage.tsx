import React from 'react'
import Field from '../components/ui/Field'
import { LoginForm } from '../components/forms/LoginForm'
import { useLogin } from '../hooks/useLogin'
const LoginPage = () => {
  const {state, login} = useLogin()
  return (
    <article>
      <LoginForm status={state} onSubmit={(value) => {login(value);
      }} />
      <pre>{state}</pre>
    </article>
  )
}

export default LoginPage
