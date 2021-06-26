import React,{ useState } from "react";

const Header = () => {
    let time = new Date().toLocaleTimeString();
    const [clocktime, clocksetTime] = useState(time);

  const clockusetTime = () => {
    let time = new Date().toLocaleTimeString();
    clocksetTime(time);
  };

  setInterval(clockusetTime, 1000);
  return (
    <>
      

      <div
        className="col-lg-11 p-0"
        style={{
          border: "1px solid",
          backgroundColor: "#8cff1a",
          display: "flex",
        }}
      >
        <h1 style={{ margin: "auto 10px auto 60px" }}>
          Current time is {clocktime}
        </h1>
      </div>
    </>
  );
};

export default Header;
