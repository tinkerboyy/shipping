import React from 'react';
import { Button } from 'reactstrap';

const Step = (props) =>  {
  return (
    <div className="">
      {props.children}
    </div>
  );
}

export default Step;