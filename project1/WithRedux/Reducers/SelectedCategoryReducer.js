const selectedCategoryReducer=(state=null,action)=>{
    switch(action.type){
        case "CATEGORY_SELECTED":
            return action.payload;
        default:
            return state;
    }
}
const selectedRangeReducer=(state=null,action)=>{
    switch(action.type){
        case "RANGE_SELECTED":
            return action.payload;
        default:
            return state;
    }
}

export default selectedCategoryReducer;
export {selectedRangeReducer}
