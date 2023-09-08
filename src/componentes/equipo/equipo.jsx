import { Colaborador } from "../colaborador/colaborador"
import "./equipo.css"
import hexToRgba from 'hex-to-rgba';

export const Equipo = (props) => {

const {colorSecundario, colorPrimario, titulo,id} = props.datos
const {colaboradores, eliminarColaborador,actualizarColor, like} = props



  return <>
   {colaboradores.length > 0 &&
    <section className="equipo" style={{background:hexToRgba(colorPrimario,0.6)}}>
        <input
            className="input-color" 
            type="color"
            value={colorPrimario}//al usar la propiedad value en inputs  o formularios, es necesario utilizar el onChange para evitar error en la consola
            onChange={(evento) => {
              actualizarColor(evento.target.value,id)
            }}
        />
        <h3 style={{borderColor:colorPrimario}}>{titulo}</h3>
        <div className="colaboradores">
          
          {
            colaboradores.map((colaborador,index) => <Colaborador 
            datos={colaborador} 
            key={index} 
            colorPrimario={colorPrimario}
            eliminarColaborador={eliminarColaborador}
            like={like}
            />)
          }
        </div>
    </section>
  
}
</>
}