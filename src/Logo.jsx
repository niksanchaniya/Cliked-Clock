import React from "react";
import img from "./clock.jpg";

const Logo = () => {
  return (
    <>
      <div className="col-lg-1 p-0 " style={{ maxWidth: "100px",minHeight: "100px",border: "1px 0px 0px 1px solid",
        }}
      >
        <img src={img} height="100px" width="100px" />
      </div>
    </>
  );
};

export default Logo;
