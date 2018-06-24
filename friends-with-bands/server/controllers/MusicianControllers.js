const Musician = require( "../models/MusicianModel.js");
let musicians = [];

const updateData = () => {
  Musician.find({}).exec().then(musicianArr => {
    musicians = musicianArr;
  });
};

updateData();

module.exports.list = function list(request, response) {
  Muisician.find({}).exec().then(musicianArr => {
    updateData();
    return response.json(musicianArr);
  });
};

module.exports.show = function show(request, response) {
  const id = request.params._id;
  Musician.find({_id: _d}).exec().then(musicianRes => {
    return response.json(musicianRes[0]);
  });
};


module.exports.create = function create(request, response) {
  updateData();
  const input = request.body;
  const newMusician = new Vehicle({
    firstName: input.firstName + " ", 
    lastName: input.lastName + " ", 
    email: input.email + " ", 
    instrument: input.instrument + " ", 
    genre: input.genre + " ", 
    example: input.example + " "
  }       
  );

  newMusician.save().then(savedMusician => {
    updateData();
    return response.json(savedMusician);
  });
};


