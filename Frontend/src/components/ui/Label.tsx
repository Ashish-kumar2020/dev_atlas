import type { LabelHTMLAttributes } from "react";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

const Label = (props: LabelProps) => {
  return <label {...props} />;
};

export default Label;
