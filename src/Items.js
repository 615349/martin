import { useState } from "react";
import './Items.css';

const Icon = ({ item, isOpen }) => {
  if (item.children) {
    if (isOpen) {
      return <span>▼</span>
    }
    return <span>▶</span>
  }
  return <span>•</span>
}

const Item = ({ item }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = (e) => {
    e.stopPropagation();
    setIsOpen((is) => !is);
  }

  return (
    <ul className="ul">
      <li onClick={toggleOpen}>
        <Icon item={item} isOpen={isOpen} />
        <span>{item.name}</span>
        {isOpen && item.children?.map((subItem) => (
          <Item key={subItem.id} item={subItem} />
        ))}
      </li>
    </ul>
  )
}

const Items = ({ items }) => (
  <>
    {items.map((item) => (
      <Item key={item.id} item={item} />
    ))}
  </>
);

export default Items;