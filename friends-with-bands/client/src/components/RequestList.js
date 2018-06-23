import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RequestList extends Component {
  // what to load before the page mounts
  componentWillMount() {
    this.props.requestsLoaded
  }

  // reading about this to learn more, looks like it needs to be replaced with componentDidUpdate
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.newMusician) {
  //     this.props.musicians.unshift(nextProps.newMusician);
  //   }
  // }
  
  render() {
    
    const mapRequests = this.state.requests.map(request => (
      <div key={request._id}>
        <h3>{request.firstname}</h3>
        <p>{request.lastname}</p>
        <h3>{request.instrument}</h3>
        <h3>{request.genre}</h3>
        <h3>{request.example}</h3>
      </div>
    ));
    
    return (
        <div>
          {mapRequests}
        </div>
    )
  }
}

RequestList.propTypes = {
  loadMusicians: PropTypes.func.isRequired,
  musicians: PropTypes.array.isRequired,
  newMusician: PropTypes.object
};

export default RequestList;

