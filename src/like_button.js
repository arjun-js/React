const root = ReactDOM.createRoot(document.getElementById('container'));

function UserGreeting(props){
  return (<div>Hello {props.name}</div>)
}

function GuestGreeting(props){
  return (<div>Hello Guest</div>)
}

function Greeting(props){
  const isLoggedIn = props.isLoggedIn;

  if(isLoggedIn){
    return <UserGreeting name={'Arjun'}/>
  } else {
    return <GuestGreeting/>
  }
}



  root.render(<div><Greeting isLoggedIn={true}/>
  <Greeting isLoggedIn={false}/></div>);
