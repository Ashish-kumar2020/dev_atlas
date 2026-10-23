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
};

