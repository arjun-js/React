'use strict';

var LikeButton = function LikeButton() {

  var myName = 'Arjun';

  function formatName(user) {
    return user.firstName + user.lastName;
  }

  var user = {
    firstName: 'Satyanandaraju',
    lastName: 'Arjun'
  };

  return React.createElement(
    'div',
    null,
    'Hola Amigo, ',
    myName,
    React.createElement('br', null),
    'formattedName : ',
    formatName(user)
  );
};

var domContainer = document.querySelector('#like_button_container');
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(LikeButton));