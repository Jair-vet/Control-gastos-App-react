import { useState } from 'react'
import { Header } from './components/Header'

export const App = () => {

  const [presupuesto, setPresupuesto] = useState(0)

  return (
    <div>
      <Header 
        presupuesto={ presupuesto }
        setPresupuesto={ setPresupuesto }
      />

    </div>
  )
}

