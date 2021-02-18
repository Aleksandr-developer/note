import React, { Fragment, useContext, useEffect } from 'react'
import { FirebaseContext } from '../components/context/firebase/firebaseContext'
import { Form } from '../components/Form'
import { Notes } from '../components/Notes'
import { Loader } from '../components/Loader'
import { REMOVE_NOTE } from '../components/context/types'

export const Home = () => {
    const { loading, notes, fetchNotes, removeNote } = useContext(FirebaseContext)

    useEffect(() => {
        fetchNotes()
        //eslint-disable-next-line
    }, [])
    return (
        <Fragment>
            <Form />
            <hr />
            {loading
                ? <Loader />
                : <Notes notes={notes} onRemove={removeNote}/>
            }
            
        </Fragment>
    )
}