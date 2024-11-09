import { toast } from 'react-toastify'
import { LoginForm } from '../components/forms/LoginForm'
import { useLogin } from '../hooks/useLogin'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const { state, login } = useLogin()
  const handleLogin = async (data: { username: string; password: string }) => {
    try {
      await login(data)
      success()
      navigate('/home')
    } catch (error) {
      errorNotificaction()
    }
  }
  const errorNotificaction = () => {
    toast.error("No se pudo iniciar sesion", {
      position: "top-right"
    });
  }
  const success = () => {
    toast.success("Sesion iniciada con exito", {
      position: "top-right"
    });
  }
  return (
    <div>
      <LoginForm onSubmit={handleLogin} status={state} />
    </div>
  )
}

export default LoginPage
