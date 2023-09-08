import { useState } from "react"
import "./miorg.css"

export const Miorg = (props) => {

    //console.log(props)

    //Estado - hooks
    //useState
    //useState()
    // const [nombreVariable, funcionActualiza] = useState(valorInicial)

    /*const [mostrar,actualizarMostrar] = useState(true);

    const manejarClick = () => {
        console.log("Manejar/Ocultar elemento",!mostrar)
        actualizarMostrar(!mostrar) //switch
    }*/
  return (
    <section className="orgSection">
        <div className="relleno"></div>
        <div className="titleContainer"><h3 className="title">Mi organización</h3></div>
        <div className="imgContainer"><img src="\img\boton-mas.png" alt="botonadd" onClick={props.cambiarMostrar}/></div>
    </section>
  )
}
