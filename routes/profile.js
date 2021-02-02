// Get all of our friend data
var data = require('../data.json');

exports.viewProfile = function(request, response){
	console.log(data);
  // Need code to grab the user we want
  var user = {};
  for (i = 0; i < data.friends.length; i++) {
    if (data.friends[i].name == request.params.name) {
      user.name = data.friends[i].name;
      user.description = data.friends[i].description;
      user.imageURL =  data.friends[i].imageURL;
      break;
      }
    }
  if (Object.keys(user).length === 0 && user.constructor === Object) {
    user.name = "Unknown User";
    user.description = "Sorry we couldn't find this person";
    user.imageURL =  "https://picsum.photos/300";
  }
  
	response.render('profile', user);
};
