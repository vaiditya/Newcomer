import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import React,{Component} from 'react';
import DisplayItems from './DisplayItems';

class PgData extends Component{
    render(){
        //console.log(this.props.pgData[0].address);
        let pd=(this.props.pgData?this.props.pgData:[]);
        
        const reqData=pd.filter((row)=>{
            return row.price<=this.props.selectedRangeProp
            });
    
            return(
            <div>
                <DisplayItems dataItems={reqData}
                            isFlatData={false}/>
            </div>
            
        );
    }
}

function mapStateToProps(state){
    return{
        pgData:state.pgData,
        selectedRangeProp:state.selectedRange
    }
}
export default connect(mapStateToProps)(PgData);