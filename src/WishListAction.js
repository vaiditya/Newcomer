const updateWishListAction=(item)=>{
    return {
        type:"UPDATE_WISHLIST",
        payload:item
    }
}

const removeItemFlagAction=()=>{
    return{
        type:"REMOVE_ITEM",
        text:'Remove'
    }

}

export default updateWishListAction;
export {removeItemFlagAction};