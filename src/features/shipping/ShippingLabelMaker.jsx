import React from 'react';
import {Provider as WizardProvider} from '../../components/wizard'
import Wizard from '../../components/wizard/Wizard';
import Steps from './Steps';
import SenderAddress from './SenderAddress';
import ReceiverAddress from './ReceiverAddress';
import Weight from './Weight';
import ShippingOption from './ShippingOption';
import Confirm from './Confirm';
import ProgressBar from '../../components/wizard/Progress'

const steps = [<SenderAddress />, <ReceiverAddress />, <Weight />, <ShippingOption />, <Confirm />]
const shippingInfo = {
  from: { name: '', street: '', city: '', state: '', zip: '' },
  to: { name: '', street: '', city: '', state: '', zip: '' },
  weight: 1,
  shippingOption: 1
}
const ShippingLabelMaker = (props) =>  {
  return (
    <WizardProvider list={steps} shipInfo={shippingInfo}>
      <div className="mx-auto w-75">
        <div className="my-5">
          <ProgressBar />
        </div>
        <Wizard>
            <h1>Shipping Label Maker</h1>
          <Steps />
        </Wizard>
      </div>
    </WizardProvider>
  );
}

export default ShippingLabelMaker;