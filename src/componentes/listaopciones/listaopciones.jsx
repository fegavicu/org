import "./listaopciones.css"

//metodo map -> arreglo.map( (equipo, index) => {
//    return <option> <option/>
//} )

export const ListaOpciones = (props) => {
    
    

  const manejarCambio = (e) => {
    console.log("Cambio",e.target.value)
    props.setValor(e.target.value)
  }

  return (
    <div className="listaopciones">
        <label >Equipo</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            { props.equipos.map( (equipo, index) => {
                return <option key={index} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>
  )
}
