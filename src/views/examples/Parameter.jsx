import React from "react"
/** UseParams para podermos usar parametros */
import { useParams } from "react-router-dom"

const Parameter = (props) => {
    /** UseParams retorna um objeto com o ID */
    const { id } = useParams()

    return (
        <div className="Parameter">
            <h1>Parametro</h1>
            <h2>Valor: { id }</h2>
        </div>
    )
}
export default Parameter;