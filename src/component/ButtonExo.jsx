import React from 'react'
import propTypes from 'prop-types'

export const ButtonExo = (props) => {
    let text = props.children
    return (
        <div>
            <button onClick={() => alert(props.children)}>Clique</button>
            <button onClick={() => props.onClick()}>Ici</button>
        </div>
    )
}

ButtonExo.propTypes = {
    // toto: propTypes.string
    toto: propTypes.number.isRequired
}