import React from 'react';

function Names (props) {
  return (
    <ul className={props.className}>{
      props.list.map((item, index) => <li className={props.className} key={index}>{item}</li>)
  }
    </ul>
  )
}
export default Names;