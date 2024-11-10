import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaLink, FaShoppingCart, FaHeart, FaStar, FaTrash } from "react-icons/fa";
import "./AboutUser.css";

const userDetails = {
  username: "johndoe",
  name: "John Doe",
  bio: "Dedicated to finding the best products online.",
  location: "Seattle, WA",
  email: "john.doe@example.com",
  website: "https://johndoe.dev",
  avatar: "https://via.placeholder.com/150",
  followers: 1200,
  following: 450,
  activityFeed: [
    { id: 1, type: "purchase", item: "Bluetooth Speaker", date: "2024-04-15" },
    { id: 2, type: "review", item: "Wireless Mouse", date: "2024-04-10" },
    { id: 3, type: "wishlist", item: "Smart TV", date: "2024-04-05" },
  ],
};

const getActivityIcon = (type) => {
  switch(type) {
    case "purchase":
      return <FaShoppingCart className="activity-icon purchase" />;
    case "review":
      return <FaStar className="activity-icon review" />;
    case "wishlist":
      return <FaHeart className="activity-icon wishlist" />;
    default:
      return <FaStar className="activity-icon" />;
  }
};

const AboutUser = () => {
  return (
    <div className="about-user">
      {/* Header Section */}
      <div className="header-section">
        <img src={userDetails.avatar} alt="User Avatar" className="header-avatar" />
        <div className="header-info">
          <h2>{userDetails.name}</h2>
          <p>@{userDetails.username}</p>
          <p className="bio">{userDetails.bio}</p>
        </div>
      </div>

      {/* Profile Summary */}
      <div className="profile-summary">
        <div className="summary-item">
          <FaShoppingCart className="summary-icon" />
          <div>
            <h3>{userDetails.followers}</h3>
            <p>Followers</p>
          </div>
        </div>
        <div className="summary-item">
          <FaHeart className="summary-icon" />
          <div>
            <h3>{userDetails.following}</h3>
            <p>Following</p>
          </div>
        </div>
        <div className="summary-item">
          <FaStar className="summary-icon" />
          <div>
            <h3>50</h3>
            <p>Reviews</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        <p><FaMapMarkerAlt /> {userDetails.location}</p>
        <p><FaEnvelope /> {userDetails.email}</p>
        <p><FaLink /> <a href={userDetails.website} target="_blank" rel="noopener noreferrer">{userDetails.website}</a></p>
      </div>

      {/* Activity Feed */}
      <div className="activity-feed">
        <h3>Recent Activity</h3>
        <ul>
          {userDetails.activityFeed.map(activity => (
            <li key={activity.id}>
              {getActivityIcon(activity.type)}
              <div className="activity-details">
                <span>{activity.type === "purchase" && "Purchased"}{activity.type === "review" && "Reviewed"}{activity.type === "wishlist" && "Added to Wishlist"}</span>
                <p>{activity.item}</p>
                <small>{activity.date}</small>
              </div>
              <FaTrash className="delete-icon" />
            </li>
          ))}
        </ul>
      </div>

      {/* Social Stats */}
      <div className="social-stats">
        <div className="stats-item">
          <FaShoppingCart className="icon" />
          <span>{userDetails.followers} Followers</span>
        </div>
        <div className="stats-item">
          <FaHeart className="icon" />
          <span>{userDetails.following} Following</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUser;
