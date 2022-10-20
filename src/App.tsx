import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import './common/styles/global.scss';
import CustomToast from './Components/CustomToast';
import CustomRoutes from './core/CustomRoutes';
import './core/i18n';
import { useAppSelector } from './core/redux';
import { loginSelector } from './core/redux/selector/login';
import SelectOrganisation from './pages/Private/SelectOrganisation';

const App: React.FC = () => {
  const { isShowSelectOrg = false } = useAppSelector(loginSelector);
  return (
    <div className="App">
      <BrowserRouter>
        <CustomRoutes />
        <SelectOrganisation isOpen={isShowSelectOrg} />
        <CustomToast />
      </BrowserRouter>
    </div>
  );
};

export default App;
