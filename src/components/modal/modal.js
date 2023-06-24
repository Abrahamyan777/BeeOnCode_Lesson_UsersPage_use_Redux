import { useState } from 'react'
import css from './modal.module.css'



function Modal({closeModal , handleSubmit, setNameState, nameState, setAgeState, ageState, setPriorityState, priorityState}) {




    return(
        <div className={css.modal} onClick={closeModal}>
            <form onSubmit={handleSubmit} className={css.form} onClick={e => e.stopPropagation()}>
                <div>
                    <label>Name</label>
                    <input value={nameState} type="text" onChange={(e) => setNameState(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input value={ageState} type="number" name="age" onChange={(e) => setAgeState(e.target.value)}/>
                </div>
                <div>
                    <label>Priority</label>
                    <input value={priorityState} type="number" onChange={(e) => setPriorityState(e.target.value)}/>
                </div>
                <button onClick={handleSubmit}>Save</button>
            </form>
        </div>
    )
}
export default Modal