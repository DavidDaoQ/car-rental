import React from "react";

const Helmet = (props) => {
  document.title = "Thuê xe ô tô dịch vụ - " + props.title;
  return <div className="w-100">{props.children}</div>;
};
export default Helmet;
