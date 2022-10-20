import React, { useEffect } from 'react';
import { routesConstansts } from '../../../common/constants/routesConstants';
import CustomButton from '../../../Components/CustomButton';
import { useNavigate } from 'react-router-dom';
import localStorageConstants from '../../../common/constants/localStorageConstants';
import { saveDataToLocalStorage } from '../../../common/utility/localStorageHandlers';
import CustomSearchField from '../../../Components/CustomSearchField';
import './styles.scss';
import { trimAndLowerCaseHandler } from '../../../common/utility/handlers';
import { useAppDispatch, useAppSelector } from '../../../core/redux';
import { selectOrgReducer } from '../../../core/redux/slice/login';
import { loginSelector } from '../../../core/redux/selector/login';
import { loginChecker } from '../../../common/utility/loginChecker';

interface IOrgDetail {
  id: number;
  name: string;
}
const Content: React.FC = () => {
  const dispatch = useAppDispatch();
  const { orgList } = useAppSelector(loginSelector);
  const { isLoggedIn, slcOrg } = loginChecker();
  const navigate = useNavigate();
  const [searchOrg, setSearchOrg] = React.useState('');
  const [selectOrg, setSelectOrg] = React.useState({ id: 0, name: '' });
  const goToDashboard = (): void => {
    dispatch(selectOrgReducer(selectOrg));
    if (!isLoggedIn) {
      saveDataToLocalStorage(localStorageConstants.LOGIN, true);
      navigate(routesConstansts.dashboard);
    }
  };
  const searchOrgHandler = (str: string): void => {
    setSearchOrg(str);
  };

  const selectOrgHandler = (data: { id: number; name: string }): void => {
    setSelectOrg(data);
  };
  const resetInputField = (): void => {
    setSearchOrg('');
  };
  useEffect(() => {
    setSelectOrg(slcOrg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="content-wrapper">
      <CustomSearchField
        value={searchOrg}
        onChangeHandler={(e) => searchOrgHandler(e.target.value)}
        placeholder="Search"
        className="org-search"
        resetInputField={resetInputField}
      />
      <div className="org-wrapper scrollbar">
        {orgList
          .filter((item: IOrgDetail) => {
            if (searchOrg.length) {
              return trimAndLowerCaseHandler(item.name).match(trimAndLowerCaseHandler(searchOrg));
            } else {
              return item;
            }
          })
          .map((item: IOrgDetail, i: number) => {
            return (
              <div
                key={i}
                onClick={() => selectOrgHandler(item)}
                className={item.id === selectOrg.id ? 'org-item select-org' : 'org-item'}>
                {item.name}
              </div>
            );
          })}
      </div>
      <div className="action">
        <CustomButton
          disabled={Boolean(!selectOrg.id)}
          label={isLoggedIn && slcOrg.id ? 'Submit' : 'Go to the Dashboard'}
          onClick={() => goToDashboard()}
        />
      </div>
    </div>
  );
};

export default Content;
