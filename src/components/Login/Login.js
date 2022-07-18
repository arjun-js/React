import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action)=>{

  if(action.type==='SET_EMAIL_VALUE'){
    return {value : action.val, isValid : action.val.includes('@')}
  } else if(action.type==='VALIDATE_EMAIL'){
    return {value : state.value, isValid : state.value.includes('@')}
  }

  return {value : '', isValid : false}

}

const passwordReducer = (state, action)=>{

  if(action.type === 'SET_PASSWORD_VALUE'){
    return {value : action.val, isValid : action.val.trim().length > 6};
  } else if(action.type === 'VALIDATE_PASSWORD'){
    return {value : state.value, isValid : state.value.trim().length > 6}
  }

  

  return {value : null, isValid : false};

}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmailStateAction] = useReducer(emailReducer, {value : '', isValid: false});

  const [passwordState, dispatchPasswordStateAction] = useReducer(passwordReducer, {value : null, isValid : false});

  const {isValid : emailIsValid} = emailState;
  const {isValid : passwordIsValid} = passwordState;

  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      console.log('Hello there');
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    },500);

    return ()=>{
      clearTimeout(timeOut);
    }
  },[setFormIsValid,emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmailStateAction({
      type: 'SET_EMAIL_VALUE',
      val : event.target.value
    });
    //setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    dispatchPasswordStateAction({
      type: 'SET_PASSWORD_VALUE',
      val: event.target.value
    });
    //setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    dispatchEmailStateAction({
      type: 'VALIDATE_EMAIL'
    });
    //setEmailIsValid(emailState.value.includes('@'));
  };

  const validatePasswordHandler = () => {
    dispatchPasswordStateAction({
      type: 'VALIDATE_PASSWORD'
    })
    //setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
