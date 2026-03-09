import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";
import clsx from "clsx";
import Button from "../Button/Button";
import Image from "next/image";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

import NavItem from "../NavItem/NavItem";

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      <div
        className={clsx(styles.Backdrop, isOpen && styles.BackdropOpen)}
        onClick={onClose}
      />
      <aside className={clsx(styles.Sidebar, isOpen && styles.SidebarOpen)}>
        <div className={styles.SidebarHeader}>
          <div className={styles.LogoWrapper}>
                        <Link href={'/'}>
                            <Image
                                className={styles.Logo}
                                src={'/Logo.jpeg'}
                                alt={'Logo'}
                                width={40}
                                height={40}
                            />
                        </Link>
                        <Link href={'/'}>
                            <span className={styles.LogoText}>Blackflame</span>
                        </Link>
                    </div>
          <Button type="button" className={styles.CloseButton} classNameIcon={styles.Icon} Icon={X} onClick={onClose} aria-label="Close menu"/>
        </div>
        <nav className={styles.Nav}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={styles.SidebarLink}
            >
              <NavItem className={styles.NavItem} isActive={pathname === item.href}>
                {item.label}
              </NavItem>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
