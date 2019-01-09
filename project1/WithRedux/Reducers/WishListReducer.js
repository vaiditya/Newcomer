const updateWishListReducer=(state=null,action)=>{
    switch(action.type){
        case "UPDATE_WISHLIST":
            return {...state,...action.payload};
        default:
            return state;
    }
}

export default updateWishListReducer;