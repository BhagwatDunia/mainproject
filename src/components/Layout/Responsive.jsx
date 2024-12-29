import { useMediaQuery } from "react-responsive";

export const Desktop = ({ children }) =>
  useMediaQuery({ minWidth: 992 }) && children;

export const Mobile = ({ children }) =>
  useMediaQuery({ maxWidth: 991 }) && children;
