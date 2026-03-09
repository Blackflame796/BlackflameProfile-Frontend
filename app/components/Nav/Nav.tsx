import clsx from "clsx";
import styles from "./Nav.module.css";

interface NavProps {
  className?: string;
  children?: React.ReactNode;
}

const Nav = ({ className = "", children }: NavProps) => {
  return <nav className={clsx(styles.Nav, className)}>{children}</nav>;
};

export default Nav;