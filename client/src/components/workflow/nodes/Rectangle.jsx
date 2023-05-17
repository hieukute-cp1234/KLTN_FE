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

  const renderTypeEffort = (type) => {
    switch (type) {
      case 2:
        return "day";
      case 3:
        return "week";
      case 4:
        return "mouth";
      default:
        return "hour";
    }
  };

  return (
    <>
      {data.isResize && (
        <NodeResizer minWidth={100} minHeight={100} onResize={handleResize} />
      )}
      <div
        className="ms-node-rectangle"
        style={{ background: data.background }}
      >
        <span className="ms-node-rectangle__title">{data.title}</span>
        <span>
          {`Effort: ${data.effortNumber} ${renderTypeEffort(data.effortType)}`}
        </span>
        <span>{`Mention: ${data.role}`}</span>
        <span>{`Input: ${data.input}`}</span>
        <span>{`Output: ${data.output}`}</span>
        <div className="ms-node-rectangle__check-list">
          <p>Check List</p>

        </div>
      </div>
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
