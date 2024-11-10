const Sidebar = ({ onSectionChange }) => {
  return (
    <div className="sidebar">
      <button className="sidebar-button" onClick={() => onSectionChange("recentOrders")}>
        Recent Orders
      </button>
      <button className="sidebar-button" onClick={() => onSectionChange("aboutUser")}>
        About You
      </button>
    </div>
  );
};

export default Sidebar;