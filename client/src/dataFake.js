export const listProcess = [
  {
    id: 1,
    name: "quy trình sản xuất phần mềm",
    description:
      "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    work_flow: "",
    list_role: [],
    create_at: "30/03/1999",
    update_at: "22/06/2003",
    projects: [],
    status: 1,
  },
  {
    id: 2,
    name: "quy trình kiểm tra chất lượng phần mềm",
    description:
      "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    work_flow: "",
    list_role: [],
    create_at: "30/03/1999",
    update_at: "22/06/2003",
    projects: [],
    status: 1,
  },
  {
    id: 3,
    name: "quy trình tính lương cho nhân viên",
    description:
      "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    work_flow: "",
    list_role: [],
    create_at: "30/03/1999",
    update_at: "22/06/2003",
    projects: [],
    status: 1,
  },
  {
    id: 4,
    name: "quy trình kiểm toán thuế thu nhập cá nhân",
    description:
      "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    work_flow: "",
    list_role: [],
    create_at: "30/03/1999",
    update_at: "22/06/2003",
    projects: [],
    status: 1,
  },
  {
    id: 5,
    name: "quy trình quảng cáo sản phẩm",
    description:
      "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    work_flow: "",
    list_role: [],
    create_at: "30/03/1999",
    update_at: "22/06/2003",
    projects: [],
    status: 1,
  },
  {
    id: 6,
    name: "quy trình xây dựng hệ thông chấm công",
    description:
      "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    work_flow: "",
    list_role: [],
    create_at: "30/03/1999",
    update_at: "22/06/2003",
    projects: [],
    status: 1,
  },
  {
    id: 7,
    name: "quy trình xây dựng tài chính kiểm toán doanh nghiệp",
    description:
      "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    work_flow: "",
    list_role: [],
    create_at: "30/03/1999",
    update_at: "22/06/2003",
    projects: [],
    status: 1,
  },
  {
    id: 8,
    name: "process_8",
    description:
      "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    work_flow: "",
    list_role: [],
    create_at: "30/03/1999",
    update_at: "22/06/2003",
    projects: [],
    status: 1,
  },
  {
    id: 9,
    name: "process_9",
    description:
      "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    work_flow: "",
    list_role: ["manager", "test"],
    create_at: "30/03/1999",
    update_at: "22/06/2003",
    projects: [],
    status: 1,
  },
  {
    id: 10,
    name: "process_10",
    description:
      "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    work_flow: "",
    list_role: [],
    create_at: "30/03/1999",
    update_at: "22/06/2003",
    projects: [],
    status: 1,
  },
];

export const listWorkflow = [
  {
    id: 1,
    name: "quy trinh san xuat phan mem",
    diagram: "",
  },
  {
    id: 2,
    name: "quy trinh kiem toan",
    diagram: "",
  },
  {
    id: 3,
    name: "quy trinh quyet toan thue",
    diagram: "",
  },
  {
    id: 4,
    name: "quy trinh kiem tra san pham",
    diagram: "",
  },
  {
    id: 5,
    name: "quy trinh thu nhập thong tin",
    diagram: "",
  },
  {
    id: 6,
    name: "quy trinh release san pham",
    diagram: "",
  },
];

export const diagrams = [
  {
    id: "1",
    type: "circleNode",
    data: {
      label: "Input Node",
    },
    position: { x: 250, y: 0 },
    edges: [
      { id: "e1-2", source: "1", target: "2", label: "this is an edge label" },
      { id: "e1-3", source: "1", target: "3", animated: true },
    ],
  },
  {
    id: "2",
    data: {
      label: "Default Node",
    },
    position: { x: 100, y: 100 },
  },
  {
    id: "3",
    type: "output",
    data: {
      label: "Output Node1",
    },
    position: { x: 400, y: 100 },
  },
  {
    id: "4",
    type: "output",
    position: { x: 100, y: 200 },
    data: {
      label: "hieukute",
      selects: {
        "handle-0": "smoothstep",
        "handle-1": "smoothstep",
      },
    },
    edges: [
      {
        id: "e4-5",
        source: "4",
        target: "5",
        type: "smoothstep",
        sourceHandle: "handle-0",
        data: {
          selectIndex: 0,
        },
        // markerEnd: {
        //   type: MarkerType.ArrowClosed,
        // },
      },
      {
        id: "e4-6",
        source: "4",
        target: "6",
        type: "smoothstep",
        sourceHandle: "handle-1",
        data: {
          selectIndex: 1,
        },
        // markerEnd: {
        //   type: MarkerType.ArrowClosed,
        // },
      },
    ],
  },
  {
    id: "5",
    type: "output",
    data: {
      label: "custom",
    },
    style: {
      background: "#2B6CB0",
      color: "white",
    },
    position: { x: 400, y: 200 },
    // sourcePosition: Position.Right,
    // targetPosition: Position.Left,
  },
  {
    id: "6",
    type: "output",
    style: {
      background: "#63B3ED",
      color: "white",
      width: 100,
    },
    data: {
      label: "Node",
    },
    position: { x: 400, y: 325 },
    // sourcePosition: Position.Right,
    // targetPosition: Position.Left,
  },
  {
    id: "7",
    type: "default",
    className: "annotation",
    data: {
      label: (
        <>
          On the bottom left you see the <strong>Controls</strong> and the
          bottom right the <strong>MiniMap</strong>. This is also just a node 🥳
        </>
      ),
    },
    draggable: false,
    selectable: false,
    position: { x: 150, y: 400 },
  },
];
