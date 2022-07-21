import React, {useState, useEffect}  from 'react';

const AuthContext = React.createContext({
    isLoggedIn : false, 
    loginHandler : (email, password)=>{},
    logoutHandler : ()=>{}
});


export const AuthContextProvider = (props)=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const isuserLoggedIn = sessionStorage.getItem('isLoggedIn');

    if(isuserLoggedIn === '1'){
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    sessionStorage.setItem('isLoggedIn', '1');
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('isLoggedIn');
  };
    return (
        <AuthContext.Provider value={{isLoggedIn : isLoggedIn, onLogout : logoutHandler, onLogin : loginHandler}}>
{props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;