import { FaTrashAlt } from 'react-icons/fa';

function LineItem({ item, handleCheck, handleDelete }) {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      />
      <label
        className="under"
        onDoubleClick={() => handleCheck(item.id)}
        style={item.checked ? { textDecoration: 'line-through' } : null}
      >
        {item.item}
      </label>
      <FaTrashAlt
        role="button"
        tabIndex="0"
        className="icon"
        onClick={() => handleDelete(item.id)}
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
}

export default LineItem;
