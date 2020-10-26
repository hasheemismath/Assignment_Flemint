import React from "react";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';


const Header = () => {
  return (

    <div className="header" style={{display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  width: "100%",
                                  textAlign: "center", 
                                  fontFamily: "Roboto", 
                                  padding: "20px 40px",
                                  position: "relative"}}>


      <p className="header_name" style={{fontSize: "15px", fontWeight: "bold"}}>Blue Tac</p>
      <p className="header_title" style={{fontSize: "15px", position: "absolute", left: "250px"}}>Dashboard | Cases</p>
      <p className="header_email" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <span style={{fontSize: "15px", fontWeight: "bold"}}>john@company.com</span>
        <span style={{fontSize: "15px", fontWeight: "bold"}}><NotificationsNoneIcon /></span>
      </p>
    </div>
 
  );
};

export default Header;
