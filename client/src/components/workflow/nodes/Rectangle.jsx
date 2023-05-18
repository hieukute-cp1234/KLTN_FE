import React, { memo } from "react";
import { Handle, Position, NodeResizer } from "reactflow";
import { Dropdown } from "antd";
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
        {!!data.effortType && !!data.effortNumber && (
          <span>
            {`Effort: ${data.effortNumber} ${renderTypeEffort(
              data.effortType
            )}`}
          </span>
        )}
        {!!data.role && <span>{`Mention: ${data.role}`}</span>}
        {!!data.input && <span>{`Input: ${data.input}`}</span>}
        {!!data.output && <span>{`Output: ${data.output}`}</span>}
        {!!data.checkList.length && (
          <Dropdown
            menu={{
              items: data.checkList,
            }}
            placement="bottom"
            arrow={{
              pointAtCenter: true,
            }}
          >
            <span>check list</span>
          </Dropdown>
        )}
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
