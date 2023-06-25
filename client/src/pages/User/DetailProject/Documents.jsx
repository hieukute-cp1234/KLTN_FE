import React from "react";
import Swal from "sweetalert2";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { getUrl } from "../../../helpers";
import "./detail.scss";

const Documents = (props) => {
  const { documents, onAddDocument, onDeleteDocument } = props;
  const handleDeleteDocument = async (id) => {
    const result = await Swal.fire({
      icon: "question",
      text: "Are you sure delete!",
      showCancelButton: true,
    });

    if (!result.isConfirmed) return;
    onDeleteDocument(id);
  };

  return (
    <div className="document">
      {documents.map((document) => (
        <div className="document__item">
          {document.link ? (
            <a href={document.link} target="_blank">
              {document.label}
            </a>
          ) : (
            <a href={getUrl(document.file)}>{document.label}</a>
          )}
          <span onClick={() => handleDeleteDocument(document.id)}>
            <MinusCircleOutlined style={{ color: "red" }} />
          </span>
        </div>
      ))}
      <div className="document__item add" onClick={onAddDocument}>
        <PlusCircleOutlined />
        Add Document
      </div>
    </div>
  );
};

export default Documents;
