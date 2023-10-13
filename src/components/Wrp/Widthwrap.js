import React from 'react'

export default function Widthwrap(props) {
  return (
    <div style={{width:'90%',margin:'0 auto'}}>
      {props.children}
    </div>
  )
}
