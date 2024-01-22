import MenuItem from "./MenuItem";

const Menu = ({ menuItems }) => {
  return (
    <section className="section-center">
      {menuItems.map((menuItem) => {
        const { img, title, price, desc } = menuItem;
        return (
          <MenuItem
            key={menuItem.id}
            img={img}
            title={title}
            price={price}
            desc={desc}
          />
        );
      })}
    </section>
  );
};
export default Menu;
