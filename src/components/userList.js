import React, {  useState } from 'react';
import css from './userList.module.css'
import { useDispatch, useSelector } from "react-redux";
import Modal from "./modal/modal";
import im from "../images/default.png"

const UserList = () => {
    const [openModal, setOpenModal] = useState(false)
    const [nameState, setNameState] = useState("")
    const [ageState, setAgeState] = useState(0)
    const [priorityState, setPriorityState] = useState(0)

    const { users } = useSelector(state => state.usersReducer)
    console.log(users);

    const dispatch = useDispatch()

    const deleteUser = (id) => {
        dispatch({ type: "DELETE_USER", user_id: id })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            id: Math.random(),
            name: nameState,
            age: ageState,
            priority: priorityState,
            avatar: im
        }
        dispatch({ type: "ADD_USER", payload: data })
    }

    return (
        <div className={css.userListSection}>
            {users
                ?
                <ul className={css.list}>
                    <li className={css.listFirstItem}>
                        <h4>Add User</h4>
                        <button onClick={() => setOpenModal(true)}>Add</button>
                    </li>
                    {
                        users.map(({ id, name, priority, avatar }) => {
                            return (
                                <li key={id} className={css.listItem}>
                                    <div className={css.leftSide}>
                                        <div className={css.left}>
                                            <img className={css.avatar} alt="User dont have avatar" src={avatar} />
                                            <h3 className={css.name}>{name} surname</h3>
                                        </div>
                                        <div className={css.right}>
                                            <h4>{`Priority: ${priority}`}</h4>
                                            <h4>Phone: +1(555)-55-55-55</h4>
                                            <h4>Email: some_mail@gmail.com</h4>
                                        </div>


                                    </div>
                                    <div className={css.sectionForButtons}>
                                        <button className={css.edit} onClick={() => setOpenModal(true)}>Edite</button>
                                        <button className={css.delete} onClick={() => {
                                            deleteUser(id)
                                        }}>Delete</button>
                                    </div>
                                </li>
                            )
                        })
                    }
                    {openModal && <Modal
                        closeModal={() => setOpenModal(false)}
                        setNameState={setNameState}
                        nameState={nameState}
                        setAgeState={setAgeState}
                        ageState={ageState}
                        priorityState={priorityState}
                        setPriorityState={setPriorityState}
                        handleSubmit={handleSubmit}
                    />}
                </ul>
                :
                <div>
                    Loading...
                </div>
            }
        </div>
    );
};

export default UserList;