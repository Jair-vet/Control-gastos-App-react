import { useState } from 'react'
import { Header } from './components/Header'
import { ListadoGastos } from './components/ListadoGastos'
import { Modal } from './components/Modal'
import { generarId } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

export const App = () => {

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastos, setGastos] = useState([])

  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 400)
  }

  const guardarGasto = gasto => {
    gasto.id = generarId()
    gasto.fecha = Date.now()
    setGastos([...gastos, gasto])

    setAnimarModal(false)
    setTimeout(() => {  // Cerrar el componente
      setModal(false)
    }, 400)
  }

  return (
    <div className={ modal ? 'fijar' : ''}>
      <Header
        gastos={ gastos } 
        presupuesto={ presupuesto }
        setPresupuesto={ setPresupuesto }
        isValidPresupuesto={ isValidPresupuesto }
        setIsValidPresupuesto={ setIsValidPresupuesto }
      />

      { isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos 
              gastos={ gastos }
            />
          </main>
          <div className="nuevo-gasto">
            <img 
              src={IconoNuevoGasto}
              onClick={ handleNuevoGasto }
            />
          </div>
        </>
      )}

      { 
        modal && <Modal
          setModal={ setModal }
          animarModal={ animarModal }
          setAnimarModal={ setAnimarModal }
          guardarGasto={ guardarGasto }
        /> 
      }

    </div>
  )
}

