import React from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'
import { Utilisateur } from './Utilisateur'
import uuid from 'react-uuid'

export const ListeUser = (props) => {
    return (
        props.noms.map((nom) => {
            return <Utilisateur nom = {nom} key={uuid()} />
        })
    )
}
