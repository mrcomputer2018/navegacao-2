import React from "react"
import "./Menu.css"
import { Link } from "react-router-dom"

const Menu = (props) => {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                        {/*<a href="/"></a>*/}
                    </li>
                    <li>
                        <Link to="/param/1">Param #01</Link>
                    </li>
                    <li>
                        <Link to="/param/legal">Param #02</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                         {/*<a href="/about">Sobre</a>*/}
                    </li>
                    <li>
                        <Link to="/naoExiste">Nao Existe</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
export default Menu;