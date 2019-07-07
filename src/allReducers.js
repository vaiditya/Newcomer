import {combineReducers} from 'redux';

import pgDataReducer from './pgDataReducer';
import flatDataReducer from './flatDataReducer';
import UserActivityReducer from './UserActivityReducer';
import selectedCategoryReducer,{selectedRangeReducer}  from './SelectedCategoryReducer';
import updateWishListReducer,{removeItemFlagReducer} from './WishListReducer';


const allReducers=combineReducers({
    pgData:pgDataReducer,
    flatData:flatDataReducer,
    userData:UserActivityReducer,
    selectedCategory:selectedCategoryReducer,
    selectedRange:selectedRangeReducer,
    wishList:updateWishListReducer,
    removeItemFlag:removeItemFlagReducer
});

export default allReducers;
