const initialState = {
    fragment:[]
  }
const updateWishListReducer=(state=initialState,action)=>{
    switch(action.type){
        case "UPDATE_WISHLIST":
            //let {pId}=action;
            //let {fragment}=action;
            return {...state,...{fragment:[...state.fragment,
                action.payload
            ]}};
        default:
            return state;
    }
}

const removeItemFlagReducer=(state='ADD',action)=>{
    switch(action.type){
        case "REMOVE_FLAG":
            return action.text;
        default:
            return state;
    }
}

export default updateWishListReducer;
export {removeItemFlagReducer};