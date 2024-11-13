import { LoginForm } from '../components/forms/LoginForm'
import { useLogin } from '../hooks/useLogin'
import { useNavigate } from 'react-router-dom'
import { useLoading } from '../hooks/useNotification'

const LoginPage = () => {
  const navigate = useNavigate()
  const {loading, success, error} = useLoading()
  const { state, login } = useLogin()
  const handleLogin = async (data: { username: string; password: string }) => {
    try {
      await loading(async () => await login(data))
      success({
        message: 'Sesion iniciada con exito'
      })
      navigate('/home')
    } catch (e) {
      error({
        message: 'No se pudo iniciar sesion'
      })
    }
  }

  return (
    <div>
      <LoginForm onSubmit={handleLogin} status={state} />
    </div>
  )
}

export default LoginPage
