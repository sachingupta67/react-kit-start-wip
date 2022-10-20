import * as React from 'react';
import Logosrc from '../../assets2/images/logo.svg';
import './style.scss';

interface ILogoProps {
  className?: string;
}

const Logo: React.FC<ILogoProps> = (props) => {
  return (
    <div className={props.className}>
      <img src={Logosrc} alt="Publishing Assistant" className="logo__image" />
      <h1 className="logo__slogan">Publishing Assistant</h1>
    </div>
  );
};

export default Logo;
