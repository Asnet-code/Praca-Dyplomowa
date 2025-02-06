interface MenuItemProps {
  children: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ children }) => {
  return (
    <div className="px-4 py-3 hover:bg-orange-50 transition">{children}</div>
  );
};

export default MenuItem;
