const recentOrders = [
  { id: 1, item: "Apple iPhone 13", date: "2024-10-01", image: "https://via.placeholder.com/150" },
  { id: 2, item: "Dell XPS 13", date: "2024-09-28", image: "https://via.placeholder.com/150" },
  { id: 3, item: "MacBook Pro", date: "2024-09-15", image: "https://via.placeholder.com/150" },
];

const RecentOrders = () => {
  return (
    <div className="recent-orders">
      <h2>Recent Orders</h2>
      <ul>
        {recentOrders.map((order) => (
          <li key={order.id}>
            <div className="order-item">
              <img src={order.image} alt={order.item} className="product-image" />
              <div className="order-details">
                <span className="order-item-name">{order.item}</span>
                <span className="order-date">{order.date}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;