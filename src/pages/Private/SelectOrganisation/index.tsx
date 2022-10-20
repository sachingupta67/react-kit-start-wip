import React, { useEffect } from 'react';
import CustomModal from '../../../Components/CustomModal';
import { useAppDispatch } from '../../../core/redux';
import { selectOrgPopUpReducer } from '../../../core/redux/slice/login';
import { getOrganisationThunk } from '../../../core/redux/thunk/login';
import Content from './Content';

interface ISelectOrganisationProps {
  isOpen?: boolean;
}

const SelectOrganisation: React.FC<ISelectOrganisationProps> = (props) => {
  const dispatch = useAppDispatch();

  const { isOpen } = props;

  const onCloseHandler = (): void => {
    dispatch(selectOrgPopUpReducer(false));
  };

  useEffect(() => {
    if (isOpen) {
      dispatch(getOrganisationThunk());
    }
  }, [dispatch, isOpen]);
  return (
    <CustomModal
      title="Select your Organization"
      className="select__organisations"
      isOpen={isOpen || false}
      closeHandler={onCloseHandler}
      content={<Content />}
    />
  );
};

export default SelectOrganisation;
