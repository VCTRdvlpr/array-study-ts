import React, { FC } from 'react';

interface Props {
  title: string;
  arrayName: string;    
}

const ArraysComponent: FC<Props> = ({ title, arrayName}) => {
  return (
    <div className="array-align">        
      <h2>{title+" ----"}</h2>
      <div className="array-name">{arrayName}</div>
    </div> 
   
  );
};

export default ArraysComponent;
