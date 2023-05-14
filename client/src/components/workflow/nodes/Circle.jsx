import React, { memo } from "react";
import { Handle, Position, NodeResizer } from "reactflow";
import "./nodes.scss";

const CircleNode = ({ data }) => {
  const handleResize = (_e, value) => {
    console.log(value);
  };

  const renderPosition = (index) => {
    switch (index + 1) {
      case 1:
        return Position.Top;
      case 2:
        return Position.Right;
      case 4:
        return Position.Left;
      default:
        return Position.Bottom;
    }
  };

  return (
    <>
      {data.isResize && (
        <NodeResizer minWidth={100} minHeight={100} onResize={handleResize} />
      )}
      <div className="ms-node-circle">{data.text}</div>
      {data.handles.map((show, index) => (
        <Handle
          id={`handle-${index}`}
          key={index}
          style={!show ? { display: "none" } : {}}
          type={data.handleTarget[index]}
          position={renderPosition(index)}
        />
      ))}
    </>
  );
};

export default memo(CircleNode);
