import { useState } from "react";
import Item from "./Item";

/*---------------------------------------
--------------------PACKAGELIST-----------------*/
export default function PackageList({
  items,
  onDeleteItem,
  onToggleItem,
  onEditItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  switch (sortBy) {
    case "input":
      sortedItems = items;
      break;
    case "description":
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
      break;
    case "packed":
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
      break;
    default:
      sortedItems = items;
  }

  //slice kullandık ve böylece items arrayinin kopyasını aldık.sadece sort() kullansaydık orijinal array mutate edilmiş olacaktı.
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onToggleItem={() => onToggleItem(item.id)}
            onDeleteItem={() => onDeleteItem(item.id)}
            //onDeleteItem={onDeleteItem(item.id) boyle yazarsan fonk direkt çağrılır o yuzden callBack kullan !!!!!

            key={item.id}
          />
        ))}
      </ul>
      <div className="action">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by input description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
