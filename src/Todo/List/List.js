import React from 'react';
import './List.scss'

function List(props) {
  return (
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { List };
