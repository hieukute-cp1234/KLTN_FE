import { MarkerType } from "reactflow";
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
    type: "rectangleNode",
    data: {
      title: "create spec",
      handles: [true, true, true, true],
      handleTarget: ["target", "target", "source", "source"],
      background: "#ffffff",
      role: "BA",
      input: "Thông tin dự án",
      output: "file spec chi tiết chức nằng",
      checkList: [
        {
          label: "seft test",
          value: false,
        },
        {
          label: "code",
          value: false,
        },
        {
          label: "deploy",
          value: false,
        },
        {
          label: "push",
          value: false,
        },
      ],
      effortNumber: 1,
      effortType: 1,
    },
    position: { x: 250, y: 0 },
    edges: [
      { id: "e1-2", source: "1", target: "2", label: "sau khi tạo spec" },
      { id: "e1-3", source: "1", target: "3", animated: true },
    ],
  },
  {
    id: "2",
    data: {
      label: "Viết detail design",
    },
    position: { x: 100, y: 200 },
    edges: [
      { id: "e1-2", source: "2", target: "4", label: "Dựa trên DD" },
      { id: "e1-3", source: "1", target: "3", animated: true },
    ],
  },
  {
    id: "3",
    type: "default",
    data: {
      label: "Thiết kế giao diện",
    },
    position: { x: 400, y: 150 },
    edges: [
      { id: "e1-2", source: "3", target: "5", label: "Dựa trên design" },
      { id: "e1-3", source: "1", target: "3", animated: true },
    ],
  },
  {
    id: "4",
    type: "output",
    position: { x: 100, y: 300 },
    data: {
      label: "codeing",
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
        markerEnd: { type: MarkerType.ArrowClosed },
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
        markerEnd: { type: MarkerType.ArrowClosed },
      },
    ],
  },
  {
    id: "5",
    type: "output",
    data: {
      label: "codeing",
    },
    style: {
      background: "#2B6CB0",
      color: "white",
    },
    position: { x: 400, y: 250 },
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
      label: "close",
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
      label: <>chú ý: khi xong cần chuyển trạng tahis cho người tiếp theo</>,
    },
    draggable: false,
    selectable: false,
    position: { x: 150, y: 400 },
  },
];

export const dataSampleProcess = [
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
    workflow: {
      nodes: [],
      edges: [],
    },
    status: 1,
  },
];

export const listUser = [
  {
    id: 1,
    name: "hieuvm",
    email: "hieuvm@vnext.vn",
    role: 1,
    project: 3,
    processCreated: 4,
    processUse: 5,
  },
  {
    id: 1,
    name: "sonpc",
    email: "sonpc@vnext.vn",
    role: 1,
    project: 3,
    processCreated: 4,
    processUse: 5,
  },
  {
    id: 1,
    name: "dieppv",
    email: "dieppv@vnext.vn",
    role: 1,
    project: 3,
    processCreated: 4,
    processUse: 5,
  },
  {
    id: 1,
    name: "nguyetlta",
    email: "nguyetlta@vnext.vn",
    role: 1,
    project: 3,
    processCreated: 4,
    processUse: 5,
  },
  {
    id: 1,
    name: "nhuntq",
    email: "nhuntq@vnext.vn",
    role: 1,
    project: 3,
    processCreated: 4,
    processUse: 5,
  },
  {
    id: 1,
    name: "manhtk",
    email: "manhtk@vnext.vn",
    role: 1,
    project: 3,
    processCreated: 4,
    processUse: 5,
  },
  {
    id: 1,
    name: "tungnt",
    email: "tungnt@vnext.vn",
    role: 1,
    project: 3,
    processCreated: 4,
    processUse: 5,
  },
  {
    id: 1,
    name: "kiennt",
    email: "kiennt@vnext.vn",
    role: 1,
    project: 3,
    processCreated: 4,
    processUse: 5,
  },
  {
    id: 1,
    name: "tridv",
    email: "tridv@vnext.vn",
    role: 1,
    project: 3,
    processCreated: 4,
    processUse: 5,
  },
];

export const listProject = [
  {
    id: 1,
    name: "LisB",
    description:
      "dự án làm app cho khách hàng Nhật về việc chụp ảnh ở công trường",
    startDate: "12/12/2022",
    endDate: "12/06/2023",
    processing: "",
    users: [],
    processId: "",
    status: "processing",
  },
  {
    id: 1,
    name: "LEAK MKT",
    description:
      "dự án làm app cho khách hàng Nhật về việc quảng cáo các sản phẩm và page",
    startDate: "12/12/2022",
    endDate: "12/06/2023",
    processing: "",
    users: [],
    processId: "",
    status: "processing",
  },
  {
    id: 1,
    name: "LTRA",
    description: "dự án làm app cho khách hàng Nhật về việc live stream",
    startDate: "12/12/2022",
    endDate: "12/06/2023",
    processing: "",
    users: [],
    processId: "",
    status: "processing",
  },
  {
    id: 1,
    name: "Three For 3",
    description: "dự án làm app cho khách hàng Nhật về việc cá cược bacarat",
    startDate: "12/12/2022",
    endDate: "12/06/2023",
    processing: "",
    users: [],
    processId: "",
    status: "maintain",
  },
];
