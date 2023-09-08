import  {useState} from "react"
import "./campo.css"

export const Campo = (props) => {
    //console.log(props)
    
    const placeholderModificado = `${props.placeholder}...`;
    
    //Destructuración

    const {type = "text"} = props

    

    const manejarCambio = (e) => {
      //console.log("cambio", e.target.value)
      props.setValor(e.target.value);
    }
  return (
    <div className={`campo campo-${type}`}>

        <label>{props.titulo}</label>
        <input placeholder={placeholderModificado} 
        required={props.required} value={props.valor} 
        onChange={manejarCambio} 
        type={type}
        />

    </div>
  )
}
