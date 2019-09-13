import React from 'react';
import { Field } from 'formik';;

const ReceiverAddress = (props) =>  {
  return (
    <>
    <div className="row">
      <div className="col">
      <h3 className="my-2">Enter Receiver's Address</h3>
        <div className="form-group">
        <label htmlFor="name">Name</label>
          <Field name="to.name">
            {({field, form}) => (
              <input className="form-control" {...field} aria-describedby="Namehelp" placeholder="Enter Name"/>
            )}
          </Field>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <div className="form-group">
          <label htmlFor="street">Street</label>
          <Field name="to.street">
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
          <Field name="to.city">
            {({field, form}) => (
              <input className="form-control" {...field} aria-describedby="Namehelp" placeholder="City"/>
            )}
          </Field>
        </div>
      </div>

      <div className="col">
        <div className="form-group">
          <label htmlFor="state">State</label>
          <Field name="to.state">
            {({field, form}) => (
              <input className="form-control" {...field} aria-describedby="Namehelp" placeholder="State"/>
            )}
          </Field>
        </div>
      </div>

      <div className="col">
        <div className="form-group">
          <label htmlFor="to.zip">Zip</label>
          <Field name="zip">
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

export default ReceiverAddress;