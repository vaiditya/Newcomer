
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';

const flatDataReducer= function(){
    return [
    {id:'fId1',address:'fAddress1',images:[img1,img2],occupancyAvailable:'1',rentAgreementVldty:'10',price:'4000'},
    {id:'fId2',address:'fAddress2',images:[img3],occupancyAvailable:'4',rentAgreementVldty:'3',price:'6500'},
    {id:'fId3',address:'fAddress3',images:[img4,img5],occupancyAvailable:'2',rentAgreementVldty:'0',price:'5500'},
    {id:'fId4',address:'fAddress4',images:[img6],occupancyAvailable:'3',rentAgreementVldty:'7',price:'7500'},];
}

export default flatDataReducer;