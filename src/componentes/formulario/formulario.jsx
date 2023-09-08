import { useState } from "react"
import "./formulario.css"
import { Campo } from "../campo/campo"
import { ListaOpciones } from "../listaopciones/listaopciones"
import { Boton } from "../boton/boton"

 const Formulario = (props) => {

   const [nombre,actualizarNombre] = useState("")
   const [puesto,actualizarPuesto] = useState("")
   const [foto,actualizarFoto] = useState("") 
   const [equipo,actualizarEquipo] = useState("")
   const [titulo,actualizarTitulo] = useState("")
   const [color,actualizarColor] = useState("")

   const {registrarColaborador,crearEquipo} = props

   const manejarEnvio = (e) => {
      e.preventDefault();
      console.log("Manejar el envio")
      let datosEnviar = {
         nombre: nombre,
         puesto:puesto,
         foto:foto,
         equipo:equipo
      }
      registrarColaborador(datosEnviar);
   }

   const manejarNuevoEquipo = (e) => {
      e.preventDefault();
      crearEquipo({titulo, colorPrimario: color})
   }

    return <section className="formulario">
         <form onSubmit={manejarEnvio}>

            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
            titulo="Nombre" 
            placeholder="Ingresar nombre" 
            required 
            valor={nombre} 
            setValor={actualizarNombre}/>

            <Campo 
            titulo="Puesto" 
            placeholder="Ingresar puesto" 
            required 
            valor={puesto} 
            setValor={actualizarPuesto}/>

            <Campo 
            titulo="Foto" 
            placeholder="Ingresar enlace de foto" 
            required valor={foto} 
            setValor={actualizarFoto}/>

            <ListaOpciones valor={equipo} setValor={actualizarEquipo} equipos={props.equipos}/>
            <Boton>
               Crear
            </Boton>
         </form>

         <form onSubmit={manejarNuevoEquipo}>

            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
            titulo="Titulo" 
            placeholder="Ingresar el titulo" 
            required 
            valor={titulo} 
            setValor={actualizarTitulo}/>

            <Campo 
            titulo="Color" 
            placeholder="Ingresar el color en HEX" 
            required 
            valor={color} 
            setValor={actualizarColor}
            type="color"
            />

            <Boton>Registrar Equipo</Boton>
            </form>

    </section>
 }

 export default Formulario