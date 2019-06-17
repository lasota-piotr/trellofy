import React from 'react'

const CloseIcon: React.FC = props => {
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
      height="1em"
      {...props}
    >
      <polygon
        fill="#333333"
        points="96,14 82,0 48,34 14,0 0,14 34,48 0,82 14,96 48,62 82,96 96,82 62,48"
      />
    </svg>
  )
}

export default CloseIcon
