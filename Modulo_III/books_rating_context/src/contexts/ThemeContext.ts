import React from "react";
import { themes } from "../constraints/Themes";

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;