import React, { useState } from 'react';
import { useFormik } from 'formik';
import './style.scss';
import CustomButton from '../../../Components/CustomButton';
import Logo from '../../../Components/Logo';
import validationSchema from '../Login/validation';
import CustomTextField from '../../../Components/CustomTextField';
import { useAppDispatch } from '../../../core/redux';
import { loginThunk } from '../../../core/redux/thunk/login';
import { ILoginPayload } from '../../../core/redux/interface/login/login';
import { useAppSelector } from '../../../core/redux/index';
import { loginSelector } from '../../../core/redux/selector/login';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const { isLoading } = useAppSelector(loginSelector);

  const loginApiHandler = (data: ILoginPayload): void => {
    dispatch(loginThunk(data));
  };

  const passwordIconHandler = (): void => {
    setIsShowPassword(!isShowPassword);
  };
  const formik = useFormik({
    initialValues: {
      email: 'pavan.gupta@encora.com',
      password: 'Demo@123',
    },
    validationSchema,
    onSubmit: (value) => {
      loginApiHandler({ userName: value.email, password: value.password });
    },
  });

  return (
    <div id="full__screen">
      <div className="container-fluid vh-100">
        <div className="row vh-100">
          <div className="col-md-6 vh-100 justify-content-center align-items-center cover-img">
            <Logo className="logo" />
          </div>
          <div className="col-md-6 vh-100 justify-content-center d-flex align-items-center">
            <div className="form__container">
              <h2 className="form__heading">Sign in</h2>
              <form onSubmit={formik.handleSubmit} className="astm-form">
                <CustomTextField
                  placeholder="Enter Email"
                  id="email"
                  type="email"
                  label="Email Address"
                  value={formik.values.email}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  helperText={formik.touched.email ? formik.errors.email : ''}
                  onChangeHandler={formik.handleChange}
                />

                <CustomTextField
                  placeholder="Enter Password"
                  id="password"
                  type={isShowPassword ? 'text' : 'password'}
                  label="Password"
                  value={formik.values.password}
                  error={Boolean(formik.touched.password && formik.errors.password)}
                  helperText={formik.touched.password ? formik.errors.password : ''}
                  onChangeHandler={formik.handleChange}
                  iconEnd={
                    isShowPassword ? (
                      <i className="fa fa-eye" onClick={passwordIconHandler}></i>
                    ) : (
                      <i className="fa fa-eye-slash" onClick={passwordIconHandler}></i>
                    )
                  }
                />
                <div className="action__bar">
                  {/* <Link className="forgot_pass" to="/forgot-password">
                      Forgot Password
                    </Link> */}
                  <CustomButton
                    disabled={Boolean(
                      isLoading ||
                        formik.values.email.length === 0 ||
                        formik.values.password.length === 0
                    )}
                    label={isLoading ? 'Loading...' : 'Sign in'}
                    color="primary"
                    size="large"
                    onClick={() => formik.handleSubmit()}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
