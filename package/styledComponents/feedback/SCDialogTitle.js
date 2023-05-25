import React from "react";
import styled from "styled-components/native";
import { Dialog } from "react-native-paper";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.FEEDBACK.DIALOG_TITLE];

export const SCDialogTitle = styled(
  Dialog.Title,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
