import React from "react";
import { Modal } from "antd";

const ModalCommon = (props) => {
  const {
    children,
    toggleModal,
    onSubmit,
    onCancel,
    title,
    sizeModal,
    hasFooter = true,
    textSubmit = "Ok",
    textCancel = "Cancel",
  } = props;

  return (
    <Modal
      title={title}
      width={sizeModal}
      open={toggleModal}
      onOk={onSubmit}
      onCancel={onCancel}
      okText={textSubmit}
      cancelText={textCancel}
      footer={hasFooter}
    >
      {children}
    </Modal>
  );
};

export default ModalCommon;
