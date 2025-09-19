import React from 'react'

export default function Alert(props) {
  const capitalize = (word) => {
    if (!word) return '';
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  // The outer div reserves space, and the inner content only renders if `alert` is not null.
  return (
    <div style={{height: '50px'}}>
      {alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(alert.type)}</strong>: {alert.msg}
      </div>}
    </div>
  )
}