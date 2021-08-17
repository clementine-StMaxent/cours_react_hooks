import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = (props) => {
    return (
        <>
            <nav>
                {
                    props.pages && props.pages.map(
                        (page, index) => {
                            <>
                            <NavLink to="/accueil">Accueil</NavLink>
                            <NavLink to="/formulaire">Formulaire</NavLink>
                            <NavLink to="/users">Users</NavLink>
                            </>
                        }
                    )
                }
            </nav>
        </>
    )
}



