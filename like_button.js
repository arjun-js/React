var root = ReactDOM.createRoot(document.getElementById('container'));

function UserGreeting(props) {
  return React.createElement(
    'div',
    null,
    'Hello ',
    props.name
  );
}

function GuestGreeting(props) {
  return React.createElement(
    'div',
    null,
    'Hello Guest'
  );
}

function Greeting(props) {
  var isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return React.createElement(UserGreeting, { name: 'Arjun' });
  } else {
    return React.createElement(GuestGreeting, null);
  }
}

root.render(React.createElement(
  'div',
  null,
  React.createElement(Greeting, { isLoggedIn: true }),
  React.createElement(Greeting, { isLoggedIn: false })
));