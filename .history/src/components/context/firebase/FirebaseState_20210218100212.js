import React, {useReducer} from 'react'
import { FirebaseContext } from './firebaseContext'
import {firebaseReducer} from './firebaseReduser'

export const FirebaseState = ({ children }) => {
const initialState = {
    notes: [],
    loading: false
}

const [state, dispatch]=useReducer(firebaseReducer,initialState)

    return (
        <FirebaseContext.Provider>
            {children}
        </FirebaseContext.Provider>
    )
}