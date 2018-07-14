import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MusicianListContainer from '../containers/MusicianListContainer';

class MusicianList extends Component {
  constructor(props) {
    super(props);    
  }
  
  componentWillMount() {
    this.props.musiciansLoaded
  } 

  // reading about this to learn more, looks like it needs to be replaced with componentDidUpdate
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.newMusician) {
  //     this.props.musicians.unshift(nextProps.newMusician);
  //   }
  // }
  
  render() {
    
    const mapMusicians = this.props.musicians.map(props => (
      <div key={props._id}>
        <h3>{props.firstname}</h3>
        <p>{props.lastname}</p>
        <h3>{props.instrument}</h3>
        <h3>{props.genre}</h3>
        <h3>{props.example}</h3>
      </div>
    ));
    
    return (
        <div>
          {mapMusicians}
        </div>
    )
  }
}

MusicianList.propTypes = {
  loadMusicians: PropTypes.func.isRequired,
  musicians: PropTypes.array.isRequired,
};

export default MusicianList;