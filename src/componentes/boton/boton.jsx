import "./boton.css"

export const Boton = (props) => {
  return (
    <div>
        <button className="boton">{props.children}</button>
    </div>
  )
}
