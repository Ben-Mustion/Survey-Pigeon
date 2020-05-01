import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  const showError = () => {
    if (touched && error) {
      return 'field error';
    } else {
      return '';
    }
  };
  return (
    <div className="ui form">
      <div className="field">
        <div className={showError()}>
          <label>{label}</label>
          <input {...input} style={{ marginBottom: '5px' }} />
        </div>
      </div>
      <div style={{ marginBottom: '20px', color: 'red' }}>
        {touched && error}
      </div>
    </div>
  );
};
