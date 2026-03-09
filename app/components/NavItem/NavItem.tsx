import clsx from 'clsx';
import styles from './NavItem.module.css';

interface NavItemProps {
    className?: string;
    isActive?: boolean;
    children?: React.ReactNode;
}

const NavItem = ({ className, isActive, children }: NavItemProps) => {
    return (
        <div className={styles.NavItem}>
            <span
                className={clsx(styles.NavText, className, {
                    [styles.active]: isActive,
                })}
            >
                {children}
            </span>
        </div>
    );
};

export default NavItem;
