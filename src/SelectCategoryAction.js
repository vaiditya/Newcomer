const selectCategory=(category)=>{
    return {
        type:"CATEGORY_SELECTED",
        payload:category
    }
}

const selectRange=(range)=>{
    return{
        type:"RANGE_SELECTED",
        payload:range
    }
}

const updateUserActivity=(category,range)=>{
    return([category,range]);
}

export default selectCategory;
export {selectRange,updateUserActivity};
