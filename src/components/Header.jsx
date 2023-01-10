import { NuevoPresupuesto } from "./NuevoPresupuesto"

export const Header = ({ presupuesto, setPresupuesto }) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        <NuevoPresupuesto
            presupuesto={ presupuesto }
            setPresupuesto={ setPresupuesto }
        />
    </header>
  )
}
