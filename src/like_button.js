const root = ReactDOM.createRoot(document.getElementById('container'));

function ListItem(props){
  return (<li>Hello {props.number}</li>)
}



function NumberList(props){
  const numbers = props.numbers;
  const listItems = numbers.map(number=>{
    return <ListItem key={Math.random()*number} number={number}></ListItem>
  });

  return (
    <div>
      <ol>
        {listItems}
      </ol>
    </div>
  )
}
  root.render(<div><NumberList numbers={[1,2,3,4,5,6]}/></div>);
