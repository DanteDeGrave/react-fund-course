import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {PRIVATE_ROUTES, PUBLIC_ROUTES} from "../router";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return <Loader/>;
  }

  return (
    isAuth ?
      <Routes>
        {PRIVATE_ROUTES.map(({path, component}) => <Route key={path} path={path} element={component}/>)}
        <Route path="/*" element={<Navigate to="/posts" replace={true}/>}/>
      </Routes>
      :
      <Routes>
        {PUBLIC_ROUTES.map(({path, component}) => <Route key={path} path={path} element={component}/>)}
        <Route path="/*" element={<Navigate to="/login" replace={true}/>}/>
      </Routes>
  );
};

export default AppRouter;
