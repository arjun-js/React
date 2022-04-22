'use strict';

const LikeButton = ()=>{

  const myName = 'Arjun';

  function formatName (user){
    return user.firstName + user.lastName;
  }

  const user = {
    firstName : 'Satyanandaraju',
    lastName : 'Arjun'
  };

  return (
    <div>
      Hola Amigo, {myName}
      <br></br>
      formattedName : {formatName(user)}
    </div>
  )
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(LikeButton))