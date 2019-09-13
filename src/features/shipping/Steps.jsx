import React from 'react';
import { Button } from 'reactstrap';
import { Formik, Form } from 'formik';
import useWizard from '../../components/wizard/useWizard';

const Steps = ({children}) =>  {
  const { activeIndex, goToNextStep, goToPreviousStep, displaySubmit, list, totalSteps, info, generateShippingLabel, label } = useWizard();
  return(
    <div className="my-5">
      {info &&
        <Formik
          initialValues={{
            from: { name: info.from.name || '', street: info.from.street || '', city: info.from.city || '', state: info.from.state || '', zip: info.from.zip || '' },
            to: { name: info.to.name || '', street: info.to.street || '', city: info.to.city  || '', state: info.to.state  || '', zip: info.to.zip  || '' },
            weight: info.weight,
            shippingOption: info.shippingOption
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
              generateShippingLabel(values)
            }, 1000);
          }}
          render={props => (

            <Form>
                {list[activeIndex]}
              {/* {props.errors.name && <div id="feedback">{props.errors.name}</div>} */}
              <div className="actions my-3 d-flex justify-content-center">
                {(activeIndex > 0) && !label &&
                  <Button color="primary"  onClick={goToPreviousStep}>Previous</Button>
                }
                {' '} 
                {(activeIndex < totalSteps) &&
                  <Button color="primary" onClick={goToNextStep}>Next</Button> }
                {' '}
                {activeIndex === totalSteps && !label && <Button type="submit" color="primary">Complete</Button>}
              </div>
            </Form>
            )}
          />
        }
      </div>
    );
}

export default Steps;