import React, { Fragment, useEffect, useState } from 'react'

export const Creation = () => {

    useEffect(() => {
        console.log("coucou")
    })

    useEffect(() => {
        return () => {
            console.log("destruction")
        }
    }, []);

    const [compteur1, setCompteur1] = useState(0)
    const [compteur2, setCompteur2] = useState(0)

    useEffect(() => {
        document.title = `${compteur1} , ${compteur2}` 
    }, [compteur1])


    return (
        <div>
            <div>
                <p>Nombre : {compteur1}</p>
                <button onClick={() => (setCompteur1(compteur1 + 1))}>Compteur 1</button>
            </div>
            <div>
                <p>Nombre : {compteur2}</p>
                <button onClick={() => (setCompteur2(compteur2 + 1))}>Compteur 2</button>
            </div>
        </div >
    )
}
