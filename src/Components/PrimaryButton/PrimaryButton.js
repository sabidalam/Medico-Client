import React from "react"

const PrimaryButton = ({ children, classes, onClick, type }) => {
  return (
    <button
      className={`btn btn-primary bg-gradient-to-r from-primary to-secondary ${classes}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
