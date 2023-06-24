import img1 from '../../images/1.png'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
import img4 from '../../images/4.png'

const initialState = {
    users: [
        {
            id: Math.random(),
            name: "Bob",
            age: 29,
            priority : 3,
            avatar : img1
        },
        {
            id: Math.random(),
            name: "Jams",
            age: 17,
            priority : 1,
            avatar : img2
        },
        {
            id: Math.random(),
            name: "Jessika",
            age: 27,
            priority : 3,
            avatar : img3
        },
        {
            id: Math.random(),
            name: "Antony",
            age: 22,
            priority : 1,
            avatar : img4
        },
        {
            id: Math.random(),
            name: "Bernard",
            age: 34,
            priority : 2,
            avatar : img2
        },
        {
            id: Math.random(),
            name: "Antony",
            age: 22,
            priority : 1,
            avatar : img4
        },
        {
            id: Math.random(),
            name: "Shon",
            age: 19,
            priority : 1,
            avatar : img1
        }
    ]
}


export const usersReducer = (state = initialState , action) => {
    switch (action.type){
        case "DELETE_USER":
            // console.log(action.type)
            // console.log(action.type)
            // console.log(action.payload)
            console.log("this is delate user 1 ");
            return {
                users : state.users.filter(user => user.id !== action.user_id)
            }
        case "ADD_USER":
            return {
                users: [...state.users, action.payload]
            }
        default :
            return state
    }
}










//
// export const usersReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "DELETE_USER":
//             return {
//                 ...state,
//                 users: state.users.filter(user => user.id !== action.payload)
//             }
//
//         default:
//             return state
//     }
// }