import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicianList extends Component {
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
    
    const mapMusicians = this.state.musicians.map(musician => (
      <div key={musician._id}>
        <h3>{musician.firstname}</h3>
        <p>{musician.lastname}</p>
        <h3>{musician.instrument}</h3>
        <h3>{musician.genre}</h3>
        <h3>{musician.example}</h3>
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
  newMusician: PropTypes.object
};

export default MusicianList;

//I still have lots of work to do.  In its current state it is a boilerplate list displaying in a collapsable nav.