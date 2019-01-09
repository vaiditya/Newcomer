import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import FlatData from './FlatData';

import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';

class App extends Component {

    render(){
        return(
        <div>
            Category:<select value={this.props.category} onChange={this.handleChange}>
            <option>Flat</option>
            <option>PG</option>
          </select>
          <input type='range' min='0' max='10000' value={this.state.amount} onChange={this.handleRangeSlider}/>
            <FlatData/>
        </div>
        );
        
    }
    constructor(props){
      super(props);
      this.state={
        category:'Flat',
        amount:'7000',
        wishListCount:0,
        showWish:'false',
        wishList:[]
      }
      
      
      this.JSONdata={
          data:[
            {category:'Flat',address:'fAddress1',images:[img1,img2],occupancyAvailable:'1',rentAgreementVldty:'10',price:'4000'},
            {category:'Flat',address:'fAddress2',images:[img3],occupancyAvailable:'4',rentAgreementVldty:'3',price:'6500'},
            {category:'Flat',address:'fAddress3',images:[img4,img5],occupancyAvailable:'2',rentAgreementVldty:'0',price:'5500'},
            {category:'Flat',address:'fAddress4',images:[img6],occupancyAvailable:'3',rentAgreementVldty:'7',price:'7500'},
            {category:'PG',address:'pAddress1',images:[],occupancyAvailable:'2',rentAgreementVldty:'NA',price:'6700'},
            {category:'PG',address:'pAddress2',images:[],occupancyAvailable:'3',rentAgreementVldty:'NA',price:'5800'},
            {category:'PG',address:'pAddress3',images:[],occupancyAvailable:'1',rentAgreementVldty:'NA',price:'6200'},
            {category:'PG',address:'pAddress4',images:[],occupancyAvailable:'1',rentAgreementVldty:'NA',price:'5400'}
          ]
      }
      this.handleChange=this.handleChange.bind(this);
      this.handleRangeSlider=this.handleRangeSlider.bind(this);
      this.updateWishList=this.updateWishList.bind(this);
      this.showWishList=this.showWishList.bind(this);
  
    }
    handleChange(event){
      //this.applyRangeSlider();
      this.setState({
        category:event.target.value
      })
    }
    handleRangeSlider(event){
      this.setState({
        amount:event.target.value
      })
    }
    updateWishList(node,flag){
        let currNode=this.state.wishList;
        let currCount=this.state.wishListCount;
        this.setState({
            wishListCount:currCount+flag,
            wishList:[...currNode,node]
        })
    }
    showWishList(){
        this.setState({
            showWish:!this.state.showWish
        })
    }
    
    render() {
      return (
        <div  className='itemsClass'>
          Category:<select value={this.state.category} onChange={this.handleChange}>
            <option>Flat</option>
            <option>PG</option>
          </select>
          <input type='range' min='0' max='10000' value={this.state.amount} onChange={this.handleRangeSlider}/>
          <Details category={this.state.category}
                    data={this.JSONdata.data}
                    amount={this.state.amount}
                    updateWishList={this.updateWishList}
          />
          <input type='button' value={this.state.wishListCount} onClick={this.showWishList}/>
          {this.state.showWish ? null:this.state.wishList}
          
        </div>
      );
    }
  }

class Details extends Component{
    constructor(props){
        super(props);

    }
    

    render(){
        const reqData=this.props.data.filter((row)=>{
        return row.category===this.props.category && row.price<=this.props.amount
        });

        return(
        <div>{this.props.category}
            <DisplayItems dataItems={reqData}
                        updateWishList={this.props.updateWishList}
            />
        </div>
        );
    }
}
class DisplayItems extends Component{

    constructor(props){
        super(props);
        this.l=[];
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(event){
       
        this.props.updateWishList(this.l[event.target.name],1);
    }
    render(){

    this.l=this.props.dataItems.map((i,j)=>{
        
        return(<React.Fragment>
                <h2>{i.address}</h2>

                <DisplayImages listOfImgLinks={i.images}/><br/>
                
                Availability:           {i.occupancyAvailable}<br/>
                Rent Agreement validity:{i.rentAgreementVldty}<br/>
                Price:Rs.               {i.price}

                <input name={j} type='button' value='add' onClick={this.handleClick}/>
        </React.Fragment>
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

ReactDOM.render(
    <App />
    , document.getElementById('root'));