import { useState } from "react";
import Title from "./Title";
import data from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

// const tempCategories = data.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const tempItems = ["all", ...tempSet];

//one liner
const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenu(newItems);
  };
  return (
    <main className="menu">
      <Title title="our menu" />
      <Categories categories={categories} filterItems={filterItems} />
      <Menu menuItems={menu} />
    </main>
  );
};
export default App;
