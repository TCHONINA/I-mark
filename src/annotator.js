import React, { useState, useEffect } from "react";
import { ReactPictureAnnotation } from "react-picture-annotation";
import Dropdown from "./dropdown";

const Annotataor = props => {
  const [pageSize, setPageSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const onResize = () => {
    setPageSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onSelect = (e, selectedId) =>
    console.log("onselct", selectedId, "e", e);
  const onChange = data => console.log("onChnage", data);

  return (
    <div className="annotation">
      <ReactPictureAnnotation
        {...props}
        inputElement={(value, onChange, onDelete) => (
          <Dropdown
            value={value}
            onChange={onChange}
            onDelete={onDelete}
            options={props.options}
          />
        )}
        image="https://source.unsplash.com/random/800x600"
        onSelect={onSelect}
        onChange={onChange}
        width={pageSize.width}
        height={pageSize.height}
      />
    </div>
  );
};

export default Annotataor;
