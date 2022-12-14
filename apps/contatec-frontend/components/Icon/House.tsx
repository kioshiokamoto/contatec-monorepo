import * as React from 'react'

export default function House(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.85 19.996h5.458a3.332 3.332 0 003.334-3.334V5.121a2.084 2.084 0 00-2.5-2.042v-.233c0-1.15-.934-2.084-2.084-2.084-.275 0-.541.05-.783.15-.375-.55-1-.908-1.717-.908-1.1 0-2 .858-2.075 1.942a2.084 2.084 0 00-2.508 2.042v7.958l-2.008-1.067a1.668 1.668 0 00-1.884.225L.358 12.629l6.084 6.342a3.368 3.368 0 002.408 1.025zm-1.208-2.184L2.758 12.73l.425-.375 4.459 2.358V3.987c0-.225.183-.416.416-.416.234 0 .417.183.417.416v6.009h1.667V2.087c0-.233.183-.416.416-.416.234 0 .417.183.417.416v7.909h1.667v-7.15c0-.234.183-.417.416-.417.234 0 .417.183.417.417v7.15h1.667V5.12c0-.234.183-.417.416-.417.234 0 .417.183.417.417v11.541c0 .917-.75 1.667-1.667 1.667H8.842c-.45 0-.884-.192-1.2-.517z"
        fill={props.color}
      />
    </svg>
  )
}
