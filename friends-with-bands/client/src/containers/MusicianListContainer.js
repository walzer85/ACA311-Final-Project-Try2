import { connect } from 'react-redux';
import MusicianList from '../components/MusicianList'

function mapStateToProps(state) {
  return {
    musicians: state.musicians,
    newMusician: state.newMusician
  };
}

export default connect(mapStateToProps)(MusicianList);