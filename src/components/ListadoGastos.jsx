import { Gasto } from "./Gasto"

export const ListadoGastos = ({ 
    gastos, 
    setGastoEditar, 
    eliminarGasto,
    filtro,
    gastosFiltrados,
}) => {
  return (
    <div className="listado-gastos contenedor">

        {
          filtro ? (  // Si hay filto
            <>
               <h2>{ gastosFiltrados.length ? 'Gastos' : 'No hay gastos Aún' }</h2>
                {gastosFiltrados.map( gasto => (
                  <Gasto 
                      key={ gasto.id }
                      gasto={ gasto }
                      setGastoEditar={ setGastoEditar }
                      eliminarGasto={ eliminarGasto }
                  />
              )) }
            </>
          ) : ( // Si no hay filtro
            <>
              <h2>{ gastos.length ? 'Gastos' : 'No hay gastos Aún' }</h2>
              {gastos.map( gasto => (
                <Gasto 
                    key={ gasto.id }
                    gasto={ gasto }
                    setGastoEditar={ setGastoEditar }
                    eliminarGasto={ eliminarGasto }
                />
            ))}
          </>
          )
        }

    </div>
  )
}
