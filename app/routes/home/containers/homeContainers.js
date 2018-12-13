import { connect} from 'react-redux';
import Home from '../components/home';
import {getCurrentLocation,getInputData} from '../modules/home';

const mapStateToProps = (state) => ({
region:state.home.region,
inputData:state.home.inputData || { }
});

const mapActionCreators = {
    getCurrentLocation,
    getInputData
};
export default connect(mapStateToProps, mapActionCreators)(Home);