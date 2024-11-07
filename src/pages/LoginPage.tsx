import { LoginForm } from '../components/forms/LoginForm'
import { useLogin } from '../hooks/useLogin'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const { state, login } = useLogin()
  const handleLogin = async (data: { username: string; password: string }) => {
    await login(data)
    navigate('/home')
  }
  return (
    <div>
      <LoginForm onSubmit={handleLogin} status={state} />
    </div>
  )
}

export default LoginPage
