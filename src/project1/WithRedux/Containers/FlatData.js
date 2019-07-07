import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import React,{Component} from 'react';
import DisplayItems from './DisplayItems';

class FlatData extends Component{
    render(){
        //console.log(this.props.flatData[0].address);
        let fd=(this.props.flatData?this.props.flatData:[]);
        
        const reqData=fd.filter((row)=>{
            return row.price<=this.props.selectedRangeProp
            });
    
            return(
            <div>
                <DisplayItems dataItems={reqData}
                            isFlatData={true}/>
            </div>
            );
    }
}

function mapStateToProps(state){
    return{
        flatData:state.flatData,
        selectedRangeProp:state.selectedRange
    }
}



export default connect(mapStateToProps)(FlatData);