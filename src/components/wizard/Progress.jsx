import React from 'react';
import useWizard from './useWizard';

const ProgressBar = () =>  {
  const context = useWizard();

  return (
    <div className="row">
      <div className="col">
          <div className="progress">
            <div className="filler" style={{width: `${context.percentage}%`}}/>
          </div>
        </div>
    </div>
  );
}

export default ProgressBar;

  
