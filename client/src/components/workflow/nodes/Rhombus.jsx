import React, { memo } from "react";
import { Handle, Position, NodeResizer } from "reactflow";
import "./nodes.scss";

const RhombusNode = ({ data }) => {
  const handleResize = (_e, value) => {
    console.log(value);
  };
  return (
    <>
      <NodeResizer minWidth={100} minHeight={100} onResize={handleResize} />
      <Handle type="target" position={Position.Top} />
      <div className="ms-node-rhumbus">{data.text}</div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle
        type="source"
        position={Position.Letf}
        id="b"
      />
    </>
  );
};

export default memo(RhombusNode);
