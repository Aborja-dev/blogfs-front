import { useNavigate } from 'react-router-dom'
import { useLoading } from '../infrastructure/hooks/useNotification'
import { useLogin } from '../infrastructure/hooks/useLogin'
import { LoginForm } from '../infrastructure/components/forms/LoginForm'
import { useSesion } from '../infrastructure/hooks/useSesion'

const LoginPage = () => {
  const navigate = useNavigate()
  const {loading, success, error} = useLoading()
  const {state, login} = useSesion()
  //const { state, login } = useLogin()
  const handleLogin = async (data: { username: string; password: string }) => {
    try {
      await login(data)
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
