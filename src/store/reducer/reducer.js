const initialState={
    user:null
}
const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case "USER_DATA":
            return{
                user:action.user
            }
        default:
            return state
    }
}

export default reducer