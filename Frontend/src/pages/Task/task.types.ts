export const items = [
  { label: "Backlog", value: "backlog" },
  { label: "InProgress", value: "inProgress" },
  { label: "Done", value: "done" },
];

export const priority = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
];

export type PRIORITY_ITEM = {
  label: string;
  value: string;
};

export type ITEMS_PROPS = {
  label: string;
  value: string;
};

export type DROPDOWN_PROP_TYPE = {
  items: ITEMS_PROPS[];
  placeHolder: string;
  value: string;
  fieldName: "status" | "priority";
  onChange: (key: "status" | "priority", value: string) => void;
  error?: string
};

export type DATE_PROP_TYPE = {
  value: string;
  fieldName: "due_date";
  onChange: (key: "due_date", value: string) => void;
  error?: string;
};

export type TASK_POST_PAYLOAD = {
  task_title: string;
  task_description?: string;
  status: string;
  priority: string;
  due_date: string;
};
