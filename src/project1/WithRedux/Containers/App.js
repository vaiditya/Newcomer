import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import selectCategory,{selectRange,updateUserActivity} from './SelectCategoryAction';
import FlatData from './FlatData';
import PgData from './PgData';
import UserActivityReducer from './UserActivityReducer';


class App extends Component {

  constructor(props){
    super(props);

    this.handleCategoryChange=this.handleCategoryChange.bind(this);
    this.handleRangeChange=this.handleRangeChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.show=false;
  }
  
  
  handleCategoryChange(event){
    this.props.selectedCategory(event.target.value);
    
  }
  handleRangeChange(event){
    this.props.selectedRange(event.target.value);
  }
  handleClick(){
    this.show=!this.show;
    this.forceUpdate();
  }
  
  render(){

    let category;
    let range;
    let displayWishList;
    

    category=(this.props.selectedCategoryProp?this.props.selectedCategoryProp:this.props.userData[0].category);
    range=(this.props.selectedRangeProp?this.props.selectedRangeProp:this.props.userData[0].price);
    displayWishList=(this.props.wishListProp?this.props.wishListProp:this.props.userData[0].wishList);
   
   
    /* if(this.props.selectedCategoryProp && this.props.selectedRangeProp)
    this.props.userDataStatus(this.props.selectedCategoryProp,this.props.selectedRangeProp);
    */
    
    
    return(
    <div>
        Category:<select value={category} onChange={this.handleCategoryChange}>
        <option>Flat</option>
        <option>PG</option>
      </select>
      <input type='range' min='0' max='10000' value={range} onChange={this.handleRangeChange}/>
      {category==='Flat'?<FlatData />:<PgData />}
      
      <input type='button' value={this.props.wishListProp?Object.keys(this.props.wishListProp).length:'0'} onClick={
        this.handleClick
      } />
        {this.show?displayWishList:null}
    </div>
    );
    
}
}


function mapStateToProps(state){
  return{
      userData:state.userData,
      selectedCategoryProp:state.selectedCategory,
      selectedRangeProp:state.selectedRange,
      wishListProp:state.wishList
  }
}

function matchDispatchTOProps(dispatch){
  return bindActionCreators({
    selectedCategory:selectCategory,
    selectedRange:selectRange,
    //userDataStatus:updateUserActivity
  },dispatch);
}
export default connect(mapStateToProps,matchDispatchTOProps)(App);
