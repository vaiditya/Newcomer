import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import selectCategory,{selectRange,updateUserActivity} from './SelectCategoryAction';
import {removeItemFlagAction} from  './WishListAction';
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
    this.showRange=false
  }
  
  
  handleCategoryChange(event){
    this.props.selectedCategory(event.target.value);
    this.showRange=true;
    
  }
  handleRangeChange(event){
    this.props.selectedRange(event.target.value);
  }
  handleClick(){
    this.show=!this.show;
    this.forceUpdate();
    this.props.removeItemFlag();
  }
  
  render(){

    let category;
    let range;
    let displayWishList;
    

    category=(this.props.selectedCategoryProp?this.props.selectedCategoryProp:this.props.userData[0].category);
    range=(this.props.selectedRangeProp?this.props.selectedRangeProp:this.props.userData[0].price);
    displayWishList=(this.props.wishListProp?this.props.wishListProp.fragment:this.props.userData[0].wishList);
    //const o=(displayWishList.length>0?displayWishList.refs.bname.name:'sadsada');
   
   
    /* if(this.props.selectedCategoryProp && this.props.selectedRangeProp)
    this.props.userDataStatus(this.props.selectedCategoryProp,this.props.selectedRangeProp);
    */
    
    
    return(
    <div className="main">
      
        <header className="header">
        <h2>NewComer</h2>
        <h5 className="wishlabel">Wishlist
        <input className='wish-button' type='button' value={this.props.wishListProp?this.props.wishListProp.fragment.length:'0'} onClick={
            this.handleClick
          } />
        </h5>
        </header>
        <div className="attribute">
            Category:<select className="select" value={category} onChange={this.handleCategoryChange}>
            <option>Flat</option>
            <option>PG</option>
            </select>
              {this.showRange?
                <div>
                  0<input className="slider" type='range' min='0' max='10000' value={range} onChange={this.handleRangeChange}/>10000
                  
                  Selected value:{range}
                </div>:null
              }
        </div>
        <div className="container">
          {category==='Flat'?<FlatData />:<PgData />}
        
            {this.show?displayWishList:null}
        </div>
        </div>
    
    );
    
}
}


function mapStateToProps(state){
  return{
      userData:state.userData,
      selectedCategoryProp:state.selectedCategory,
      selectedRangeProp:state.selectedRange,
      wishListProp:state.wishList,
      
  }
}

function matchDispatchTOProps(dispatch){
  return bindActionCreators({
    selectedCategory:selectCategory,
    selectedRange:selectRange,
    removeItemFlag:removeItemFlagAction
    //userDataStatus:updateUserActivity
  },dispatch);
}
export default connect(mapStateToProps,matchDispatchTOProps)(App);
