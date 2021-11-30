import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='names'
          placeholder='Pair Names' 
          className='form-control'/>
          <br />
        <input
          type='text'
          name='location'
          placeholder='Location' 
          className='form-control'/>
          <br />
        <textarea
          name='issue'
          placeholder='Describe your issue.' 
          className='form-control'/>
          <br />
        <button type='submit' className='btn btn-dark'>{props.buttonText}</button>
      </form>
        <br />
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;