import React, { useState } from "react";
import Sidebar from "./Sidebar";
import RecentOrders from "./RecentOrders";
import AboutUser from "./Aboutuser"
import "./Dashboard.css"; 

const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState("recentOrders");

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar onSectionChange={handleSectionChange} />
      
      {/* Main Content Area */}
      <div className="content">
        {selectedSection === "recentOrders" ? (
          <RecentOrders />
        ) : (
          <AboutUser />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
