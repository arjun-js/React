const root = ReactDOM.createRoot(document.getElementById('container'));


// function Form(){

//   const submitHandler = (event)=>{
//     //event here is a synthetic event
//    event.preventDefault();
//     console.log('you clicked submit');
//   }


//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <button type='submit'>SUbmit click </button>
//       </form>
//     </div>
//   )

// }

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toggle : false,
      text : 'hi'
    }

  //  this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(text, event){
    event.preventDefault();
    this.setState(prevState=> {
      return {
      toggle: !prevState.toggle,
      text
    }});
  }

  render(){
    return (
      <form onSubmit={this.submitHandler.bind(this, 'hola')}>
        <button type='submit'>Hello this is submit button</button>
        <br>
        </br>
        {JSON.stringify(this.state.toggle)} 
        <br>
        </br>
        {this.state.text}
      </form>
    )
  }
}


  root.render(<Form></Form>);
