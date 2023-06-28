/*---------------------------------------
--------------------ITEM-----------------*/

export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={onToggleItem} />
      <span
        style={
          item.packed ? { textDecoration: "line-through", opacity: 0.6 } : {}
        }
      >
        {item.quantity} {item.description}
      </span>
      <button onClick={onDeleteItem}>❌</button>
    </li>
  );
}
