import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Button.scss';

function Button(props) {
  return (
    <button className="CreateTodoButton">
      <FontAwesomeIcon icon={faTimes} />
    </button>
  );
}

export { Button };
