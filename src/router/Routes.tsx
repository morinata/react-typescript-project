import React, {FC, useContext} from 'react';
import {Routes, Route} from 'react-router-dom';
import BaseLoader from '../components/UI/BaseLoader';
import {AuthContext} from '../context';
import {privateRoutes, publicRoutes} from './index';

const AppRoutes: FC = () => {
  const {isAuth, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return <BaseLoader />;
  }

  return (
    isAuth ? (
      <Routes>
        {privateRoutes.map(({path, element}) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      ) : (
      <Routes>
        {publicRoutes.map(({path, element}) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      )
  );
};

export default AppRoutes;