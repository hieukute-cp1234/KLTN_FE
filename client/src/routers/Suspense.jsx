import React, { Suspense } from "react";
import { Skeleton } from "antd";

const SuspenseComponent = (props) => {
  const { component } = props;
  return <Suspense fallback={<Skeleton />}>{component}</Suspense>;
};

export default SuspenseComponent;
