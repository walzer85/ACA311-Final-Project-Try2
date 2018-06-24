const Request = require( "../models/RequestModel.js");
let requests = [];

const updateData = () => {
  Request.find({}).exec().then(requestArr => {
    requests = requestArr;
  });
};

updateData();

module.exports.list = function list(request, response) {
  Muisician.find({}).exec().then(requestArr => {
    updateData();
    return response.json(requestArr);
  });
};

module.exports.show = function show(request, response) {
  const id = request.params._id;
  Request.find({_id: id}).exec().then(requestResponse => {
    return response.json(requestResponse[0]);
  });
};


module.exports.create = function create(request, response) {
  updateData();
  const input = request.body;
  const newRequest = new Vehicle({
    firstName: input.firstName + " ", 
    lastName: input.lastName + " ", 
    email: input.email + " ", 
    instrument: input.instrument + " ", 
    genre: input.genre + " ", 
    example: input.example + " "
  }       
  );

  newRequest.save().then(savedRequest => {
    updateData();
    return response.json(savedRequest);
  });
};


