import clsx from 'clsx';
import styles from './Button.module.css';

interface ButtonProps {
    type: "button" | "submit" | "reset";
    className?: string;
    classNameIcon?: string;
    children?: React.ReactNode;
    Icon?: React.ElementType;
    onClick?: () => void;
}

const Button = ({ type, children, onClick, className, classNameIcon, Icon }: ButtonProps) => {
    return (
        <button type="button" onClick={onClick} className={clsx(styles.Button, className)}>
            {Icon && <span className={clsx(styles.Icon, classNameIcon)}>{<Icon/>}</span>}
            {children}
        </button>
    );
};

export default Button;
