import React, {useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {OverrideStyles} from './theme/overrideStyles';
import BaseNavbar from './components/UI/BaseNavbar';
import AppRoutes from './router/Routes';
import {AuthContext} from './context';

const App = () => {
  const [isAuth, setAuth] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (localStorage.getItem('auth')){
      setAuth(true);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{isAuth, setAuth, isLoading}}>
      <BrowserRouter>
        <OverrideStyles />
        <BaseNavbar />
        <div className="container">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
