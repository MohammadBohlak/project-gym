// Layout.js
import React from "react";
const Layout = ({ visible, children }) => {
  return (
    <div>
      <div className="loader" style={{ visibility: `${visible}` }}></div>
      {children}
    </div>
  );
};

export default Layout;
