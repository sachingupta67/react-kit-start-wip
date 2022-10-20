import React from 'react';
import { useRoutes } from 'react-router-dom';
import Login from '../../pages/Public/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import ManageAttributes from '../../pages/Private/ManageAttributes';
import UserAccess from '../../pages/Private/UserAccess';
import ManageAssets from '../../pages/Private/ManageAssets';
import AddNewAttributes from '../../pages/Private/ManageAttributes/AddNewAttributes';
import Page404 from '../../pages/Common/404Page';
import ForgotPassword from '../../pages/Public/ForgotPassword';
import { routesConstansts } from '../../common/constants/routesConstants';
import Dashboard from '../../pages/Private/Dashboard';

const {
  login,
  manageAttributes,
  addNewManageAttributes,
  userAccess,
  manageAssets,
  forgotPassword,
  page404,
  dashboard,
} = routesConstansts;

const CustomRoutes: React.FC = () => {
  const routesData = [
    {
      path: login,
      element: <PublicRoute Component={Login} />,
    },
    {
      path: dashboard,
      element: <PrivateRoute Component={Dashboard} />,
    },
    {
      path: manageAttributes,
      element: <PrivateRoute Component={ManageAttributes} />,
    },
    {
      path: addNewManageAttributes,
      element: <PrivateRoute Component={AddNewAttributes} />,
    },
    {
      path: userAccess,
      element: <PrivateRoute Component={UserAccess} />,
    },
    {
      path: manageAssets,
      element: <PrivateRoute Component={ManageAssets} />,
    },

    { path: forgotPassword, element: <PublicRoute Component={ForgotPassword} /> },
    { path: page404, element: <Page404 /> },
  ];
  const routes = useRoutes(routesData);
  return <>{routes}</>;
};

export default CustomRoutes;
