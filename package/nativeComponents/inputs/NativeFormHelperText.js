import React from "react";
import { useSelector } from "react-redux";
import { SCFormHelperText } from "../../styledComponents/inputs/SCFormHelperText";

export default function NativeFormHelperText(props) {
  const { error = false } = props;
  const { showHelperText = true } = useSelector((state) => state.forms);
  return (
    <SCFormHelperText type={error ? "error" : ""} {...props}>
      {showHelperText && props.children}
    </SCFormHelperText>
  );
}
