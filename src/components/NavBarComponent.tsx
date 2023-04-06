import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;   
  to: string;   
}

const NavBarComponent: FC<Props> = ({ title, to }) => {
  return (    
    <Link to={to}>       
        <button className='nav-btn-style'>{title}</button>       
    </Link>       
  );
};

export default NavBarComponent;
