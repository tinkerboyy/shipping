import React from 'react';
import { Button } from 'reactstrap';
import { Field } from 'formik';
import useWizard from '../../components/wizard/useWizard';

const ShippingLabel = ({shippingCost, info}) =>  {
//   const {label, info, cost} = useWizard();
//   console.log(label, info, cost )
  return (
      <div className="row">
          <div className="col-md-4">
              <h4>Sender's Address</h4>
                <div>
                    <span>Name: </span><span>{info.from.name}</span>
                </div>
                <div>
                    <span>Name: </span><span>{info.from.street}</span>
                </div>
                <div>
                    <span>Name: </span><span>{info.from.city}</span>
                </div>
                <div>
                    <span>Name: </span><span>{info.from.state}</span>
                </div>
        </div>
          <div className="col-md-4">
            <h4>Receiver's Address</h4>

                <div>
                    <span>Name: </span><span>{info.to.name}</span>
                </div>
                <div>
                    <span>Name: </span><span>{info.to.street}</span>
                </div>
                <div>
                    <span>Name: </span><span>{info.to.city}</span>
                </div>
                <div>
                    <span>Name: </span><span>{info.to.state}</span>
                </div>
          </div>
          <div className="col-md-4">
          <h4>Shipping Cost</h4>

              <h4>{shippingCost}</h4>
          </div>
      </div>
  )
    
}

export default ShippingLabel;