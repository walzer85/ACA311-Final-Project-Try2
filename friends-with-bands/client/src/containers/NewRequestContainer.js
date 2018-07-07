import { connect } from 'react-redux';
import NewRequest from '../components/NewRequest';

function mapStateToProps(state) {
  return {
    addRequest: state.addRequest
  }
}

function mapDispatchToProps(dispatch) {
  return {
    settAddRequest: function (addRequest) {
      dispatch(setAddRequest(addRequest));
    }
  }
}

const NewRequestListContainer =  connect(mapStateToProps, mapDispatchToProps)(newRequestList);
export default NewRequestListContainer;