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
    
    const mapRequests = this.props.requests.map(props => (
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
          {mapRequests}
        </div>
    )
  }
}

RequestList.propTypes = {
  loadRequests: PropTypes.func.isRequired,
  requests: PropTypes.array.isRequired,
  newRequest: PropTypes.object
};

export default RequestList;

