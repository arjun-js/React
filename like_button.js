var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var root = ReactDOM.createRoot(document.getElementById('container'));

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

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.state = {
      toggle: false,
      text: 'hi'

      //  this.submitHandler = this.submitHandler.bind(this);
    };return _this;
  }

  _createClass(Form, [{
    key: 'submitHandler',
    value: function submitHandler(text, event) {
      event.preventDefault();
      this.setState(function (prevState) {
        return {
          toggle: !prevState.toggle,
          text: text
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { onSubmit: this.submitHandler.bind(this, 'hola') },
        React.createElement(
          'button',
          { type: 'submit' },
          'Hello this is submit button'
        ),
        React.createElement('br', null),
        JSON.stringify(this.state.toggle),
        React.createElement('br', null),
        this.state.text
      );
    }
  }]);

  return Form;
}(React.Component);

root.render(React.createElement(Form, null));