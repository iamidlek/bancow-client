import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { change, DarkModeState } from "../../../redux/thememode";
import { Circle, ToggleTheme } from "./ModeToggleStyle";

const ModeToggle = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state: DarkModeState) => state.isDark);

  const onClickHandler = () => {
    dispatch(change());
  };
  return (
    <ToggleTheme onClick={onClickHandler}>
      <Circle className={isDark ? "dark" : ""} />
    </ToggleTheme>
  );
};

export default ModeToggle;
