import { useState } from "react";

function ListGroup() {
  let items = [
    "Paris",
    "Bourg-en-Bresse",
    "Sampans",
    "Souraïde",
    "Espelette",
    "Biarritz",
  ];

  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <>
      <h1>List of cities</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedItem(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
