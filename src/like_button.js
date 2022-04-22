const root = ReactDOM.createRoot(document.getElementById('container'));

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date : new Date()
    }
  }

  componentDidMount(){
    this.timer = setInterval(()=> this.tick(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  tick(){
    this.setState({
      date : new Date()
    })
  }

  render(){
    return (
      <div>
      <h1>Hello World new component</h1>
      <h2>It is new date now : {this.state.date.toLocaleTimeString()}</h2>
    </div>
    )
  }
}

  root.render(<div>
    <Clock/>
    <Clock/>
    <Clock/>
    <Clock/>
    </div>);




// function Clock (props){

//   return (
// <div>
//       <h1>Hello World new component</h1>
//       <h2>It is new date now : {props.date.toLocaleTimeString()}</h2>
//     </div>
//   )

// }