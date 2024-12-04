import classes from "./Button.module.css";

export function Button({ children, buttonCliked, buttonIsActive }) {
  return (
    <button
      onClick={buttonCliked}
      className={`${
        buttonIsActive ? classes.button : `${classes.button} ${classes.active}`
      }`}
    >
      {children}
    </button>
  );
}
