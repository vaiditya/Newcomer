import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { updateUserActivity } from './SelectCategoryAction';
import updateWishListAction from './WishListAction';

class DisplayItems extends Component{

    constructor(props){
        super(props);
        this.l=[];
        this.handleAddClick=this.handleAddClick.bind(this);
    }

    handleAddClick(event){
       
        this.props.wishListprop(this.l[event.target.name]);
    }
    render(){

    this.l=this.props.dataItems.map((i,j)=>{
        
        return(<div className="item">
                <h2>{i.address}</h2>

                <DisplayImages listOfImgLinks={i.images}/><br/>
                <ul>
                <li>Availability:           {i.occupancyAvailable}</li>
                <li>Rent Agreement validity:{(this.props.isFlatData?i.rentAgreementVldty:'NA')}</li>
                <li>Price:Rs.               {i.price}</li>

                <li><input class="button" name={j} type='button' value={this.props.buttonProp} onClick={this.handleAddClick} ref='bname'/></li>
                </ul>
        </div>
    )})
  
    return this.l;
    }
        
}

function DisplayImages(props){
    let ImageList=[];
    for(let i=0;i<props.listOfImgLinks.length;i++)
        ImageList.push(<img src={props.listOfImgLinks[i]}/>);

    return ImageList;
}

function mapStateToProps(state){
    return{
        buttonProp:state.removeItemFlag
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({
      wishListprop:updateWishListAction
    },dispatch);
  }

export default connect(mapStateToProps,matchDispatchToProps)(DisplayItems);