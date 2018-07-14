import { connect } from 'react-redux';
import NewMusician from '../components/NewMusician';

function mapStateToProps(state) {
  return {
    newMusician: state.newMusician
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setNewMusician: function (newMusician) {
      dispatch(setNewMusician(newMusician));
    }
  }
}

const NewMusicianListContainer =  connect(mapStateToProps, mapDispatchToProps)(NewMusician);
export default NewMusicianListContainer;