var root = ReactDOM.createRoot(document.getElementById('container'));

function ListItem(props) {
  return React.createElement(
    'li',
    null,
    'Hello ',
    props.number
  );
}

function NumberList(props) {
  var numbers = props.numbers;
  var listItems = numbers.map(function (number) {
    return React.createElement(ListItem, { key: Math.random() * number, number: number });
  });

  return React.createElement(
    'div',
    null,
    React.createElement(
      'ol',
      null,
      listItems
    )
  );
}
root.render(React.createElement(
  'div',
  null,
  React.createElement(NumberList, { numbers: [1, 2, 3, 4, 5, 6] })
));