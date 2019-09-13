import React from 'react';
import { Button } from 'reactstrap';
import { Field } from 'formik';
import useWizard from '../../components/wizard/useWizard';
import ShippingLabel from './ShippingLabel';

const Confirm = (props) =>  {
  const {label, info, cost, generateLabel} = useWizard();
  return (
    <div className="row">
      <div className="col-md-4">
      {!label && <h3 className="my-2">Confirm Your Selections</h3>}
      {label && <Button color="danger" onClick={generateLabel}>Generate Label</Button> }
      </div>
      {label && <ShippingLabel info={info} shippingCost={cost}/>}
    </div>
  );
}

export default Confirm;