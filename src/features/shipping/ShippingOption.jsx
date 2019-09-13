import React from 'react';
import { Field } from 'formik';

const ShippingOption = (props) =>  {
  return (
    <div className="row">
      <div className="col-md-4">
      <h3 className="my-2">Select Shipping Option</h3>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <Field name="shippingOption">
            {({field, form: { onBlur, onChange, value }}) => (
              <select className="form-control" {...field}>
                <option value="1">Ground</option>
                <option value="2">Priority</option>
              </select>
              )}
          </Field>
          </div>
      </div>
    </div>
  );
}

export default ShippingOption;