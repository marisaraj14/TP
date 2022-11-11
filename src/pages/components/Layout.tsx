import React from "react";
import '../../styles/index.scss'


const Layout = ({ children }: any) => {
  return (
    <React.Fragment>
      <div className="layoutContainer">
          {children}
      </div>
    </React.Fragment>
  );
};
export default Layout;
