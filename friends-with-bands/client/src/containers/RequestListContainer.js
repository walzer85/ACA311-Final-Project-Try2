import { connect } from 'react-redux';
import RequestList from './components/RequestList'

function mapStateToProps(state) {
  return {
    requests: state.requests,
    newRequest: state.newRequest
  };
}

export default connect(mapStateToProps)(RequestList);