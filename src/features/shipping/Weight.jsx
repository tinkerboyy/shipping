import React from 'react';
import { Field } from 'formik';

const Weight = (props) =>  {
  return (
    <div className="row">
      <div className="col-md-4">
      <h3 className="my-2">Enter Weight</h3>
        <div className="form-group">
          <label htmlFor="name">Weight</label>
            <Field name="weight">
              {({field, form: { onBlur, onChange, value }}) => (
                <input type="number" className="form-control" value={value} {...field} aria-describedby="Namehelp" placeholder=""/>
              )}
            </Field>
          </div>
      </div>
    </div>
  );
}

export default Weight;