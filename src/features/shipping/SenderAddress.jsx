import React from 'react';
import { Field } from 'formik';

const SenderAddress = (props) =>  {
  return (
    <>
      <div className="row">
        <div className="col">
          <h3 className="my-2">Enter Sender's Address</h3>
          <div className="form-group">
          <label htmlFor="name">Name</label>
            <Field name="from.name">
              {({field, form: { onBlur, onChange, value }}) => (
                <input className="form-control" value={value} {...field} aria-describedby="Namehelp" placeholder="Enter Name"/>
              )}
            </Field>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="form-group">
            <label htmlFor="street">Street</label>
            <Field name="from.street">
              {({field, form}) => (
                <input className="form-control" {...field} aria-describedby="Namehelp" placeholder="Street"/>
              )}
            </Field>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <Field name="from.city">
              {({field, form}) => (
                <input className="form-control" {...field} aria-describedby="Namehelp" placeholder="City"/>
              )}
            </Field>
          </div>
        </div>

        <div className="col">
          <div className="form-group">
            <label htmlFor="state">State</label>
            <Field name="from.state">
              {({field, form}) => (
                <input className="form-control" {...field} aria-describedby="Namehelp" placeholder="State"/>
              )}
            </Field>
          </div>
        </div>

        <div className="col">
          <div className="form-group">
            <label htmlFor="zip">Zip</label>
            <Field name="from.zip">
              {({field, form}) => (
                <input className="form-control" {...field} aria-describedby="Namehelp" placeholder="Zip"/>
              )}
            </Field>
          </div>
        </div>
      </div>
    </>
  );
}

export default SenderAddress;
