import { Counter } from './Counter/Counter';
import { Search } from './Search/Search';
import { List } from './List/List';
import { Item } from './Item/Item';
import { Button } from './CreateButton/Button';

import './Todo.scss';

const todos = [
  { text: 'Buy ingredients', completed: true },
  { text: 'Mix the ingredients', completed: false },
  { text: 'Bake', completed: false },
  { text: 'Enjoy the cake', completed: false },
];

function Todo() {
  return (
    <div className="container">
      <div className="TodoContainer">
        <Counter />
        <Search />

        <List>
          {todos.map(todo => (
            <Item
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </List>

        <Button />
      </div>
    </div>
  );
}

export { Todo };
