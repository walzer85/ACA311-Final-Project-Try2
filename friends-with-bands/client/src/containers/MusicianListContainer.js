import { connect } from 'react-redux';
import MusicianList from '../components/MusicianList'

function mapStateToProps(state) {
  return {
    musicians: state.musicians,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    musiciansLoaded: function (musician) {
      dispatch(musiciansLoaded(musician));
    }
  };
}

const MusicianListContainer =  connect(mapStateToProps, mapDispatchToProps)(MusicianList);
export default  MusicianListContainer;