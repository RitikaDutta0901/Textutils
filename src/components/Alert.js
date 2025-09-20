import React, { useState } from 'react';

export default function Alert(props) {
  const capitalize = (word) => {
    if (!word) return '';
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  // The outer div reserves space, and the inner content only renders if `props.alert` is not null.
  return (
    <div style={{ height: '50px' }}>
      {props.alert && (
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}