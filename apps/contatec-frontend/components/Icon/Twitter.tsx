import * as React from "react"

function Twitter(props) {
  return (
    <svg
      width="1.3em"
      height="1.3em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 0H2a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V2a2 2 0 00-2-2zm-2.65 6.24A5.887 5.887 0 0017 5.801a5.742 5.742 0 01-1.434 1.437c.005.12.008.24.008.36 0 3.67-2.888 7.901-8.171 7.901A8.335 8.335 0 013 14.253c.225.026.454.039.685.039a5.887 5.887 0 003.568-1.19c-1.257-.022-2.318-.825-2.683-1.928a3.018 3.018 0 001.297-.048c-1.315-.255-2.304-1.377-2.304-2.723v-.035c.387.208.83.333 1.3.347a2.752 2.752 0 01-1.277-2.31c0-.51.142-.987.389-1.397a8.25 8.25 0 005.92 2.901 2.72 2.72 0 01-.075-.632c0-1.533 1.286-2.777 2.873-2.777.825 0 1.572.337 2.096.877a5.88 5.88 0 001.824-.674 2.8 2.8 0 01-1.263 1.536z"
        fill={props.color}
      />
    </svg>
  )
}

export default Twitter
