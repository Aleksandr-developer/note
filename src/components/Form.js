import React, { useState, useContext } from 'react'
import { AlertContext } from './context/alert/alertContext'

export const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)

    const submitHandler = event => {
        event.preventDefault()
        if (value.trim()) {
            alert.show('Заметка была создана', 'success')
            setValue('')
        } else {
            alert.show('Создайте заметку')
        }
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