import { TYPE_TASK, STATUS_TASK } from "../constants";

export const styleType = (type) => {
  switch (type) {
    case TYPE_TASK.TASK:
      return {
        background: "#bae637",
        text: "Task",
      };
    case TYPE_TASK.ISSUE:
      return {
        background: "#ffa940",
        text: "Issue",
      };
    default:
      return {
        background: "#ff4d4f",
        text: "Bug",
      };
  }
};

export const styleStatus = (status) => {
  switch (status) {
    case STATUS_TASK.OPEN:
      return {
        background: "#ff9c6e",
        text: "Open",
      };
    case STATUS_TASK.INPROGRESS:
      return {
        background: "#69b1ff",
        text: "Inprogress",
      };
    case STATUS_TASK.VERIFY:
      return {
        background: "#fff566",
        text: "Verify",
      };
    default:
      return {
        background: "#d9d9d9",
        text: "Close",
      };
  }
};
