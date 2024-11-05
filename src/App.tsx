import { useState } from 'react'
import Main from './layout/Main'
import LoginPage from './pages/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main>
        <LoginPage />
      </Main>
    </>
  )
}

export default App
