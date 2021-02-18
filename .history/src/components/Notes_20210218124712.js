import React from 'react'

export const Notes = ({ notes, onRemove }) => (
        <ul class="list-group">
            {notes.map(note => (
                <li
                    class="list-group-item note"
                    key={note.id}
                >
                    <div>
                        <strong>{note.title}</strong>

                        <sub>{new Date().toLocaleDateString()}</sub>
                    </div>
                    <button
                        type="button"
                        class="btn btn-outline-danger btn-sm"
                        onClick={() => onRemove(note.id)}
                    >
                        &times;
                    </button>
                </li>
            ))}
        </ul>
    )
