import React from "react";

import classes from "./Container.module.css";

export default function Container({ children, styles }) {
  return (
    <div className={`${classes.container}`} style={styles || null}>
      {children}
    </div>
  );
}
