import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackageList from "./PackageList";
import Stats from "./Stats";
/*const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 12, packed: false },
];*/

export default function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };
  const handleDeleteItem = (id) => {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
    console.log("deleted");
  };
  const handleToggleItem = (id) => {
    console.log(id);
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
    //items'ı tara . Tıklanan item'in id'si ile tek tek diğer itemlar ile karşılaştır. id'leri eşleşirse packed özeliğini değiştirip gönder.eşit olmayanları ise aynı haliyle dönder
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items ?"
    );
    if (confirmed) setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onHandleItems={handleAddItems} />
      <PackageList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
