import React, { useState, useContext } from 'react'
import { AlertContext } from './context/alert/alertContext'
import { FirebaseContext } from './context/firebase/firebaseContext'

export const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const submitHandler = event => {
        event.preventDefault()
        if (value.trim()) {
            firebase.addNote(value.trim()).then(() => {
                alert.show('Заметка была создана', 'success')
            })      
        } else {
            alert.show('Создайте заметку')
        }
        setValue('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <input
                    type="text"
                    className="form-control"
                    placeHolder="Введите заметку"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}