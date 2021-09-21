import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faBars, faTrash } from '@fortawesome/free-solid-svg-icons'
// faCheckSquare
import './Item.scss';

function Item(props) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-move`}>
        <FontAwesomeIcon icon={faBars} />
      </span>
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
        <FontAwesomeIcon icon={faSquare} />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">
        <FontAwesomeIcon icon={faTrash} />
      </span>
    </li>
  );
}

export { Item };
