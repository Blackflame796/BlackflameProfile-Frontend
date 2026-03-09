import clsx from "clsx";
import styles from "./NavItem.module.css";

interface NavItemProps {
  className?: string;
  isActive?: boolean;
  children?: React.ReactNode;
}

const NavItem = ({ className, isActive, children }: NavItemProps) => {
  return (
    <span
      className={clsx(styles.NavItem, className, {
        [styles.active]: isActive
      })}
    >
      {children}
    </span>
  );
};

export default NavItem;
