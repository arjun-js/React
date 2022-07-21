
import React, {useRef, useImperativeHandle} from 'react';


const TextInput = React.forwardRef((props, ref)=>{

  const inputRef = useRef();

  const activate = ()=>{
    inputRef.current.focus();
  }

  useImperativeHandle(ref, ()=>{
    return {
      focus : activate
    }
  });



    return (
    
    <div
        className={props.class}
      >
        <label htmlFor={props.name}>{props.label}</label>
        <input
          type={props.type}
          ref={inputRef}
          id={props.name}
          value={props.value}
          onChange={props.onChangeHandler}
          onBlur={props.validate}
        />
      </div>)

});

export default TextInput;