'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Nav from '../Nav/Nav';
import styles from './Header.module.css';
import Image from 'next/image';
import NavItem from '../NavItem/NavItem';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import Sidebar from '../Sidebar/Sidebar';
import Button from '../Button/Button';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <header className={styles.Header}>
                <div className={styles.HeaderContainer}>
                    <Button
                        type="button"
                        className={styles.MenuButton}
                        classNameIcon={styles.MenuIcon}
                        onClick={() => setIsSidebarOpen(true)}
                        aria-label="Open menu"
                        Icon={Menu}
                    />

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

                    <div className={styles.NavWrapper}>
                        <Nav>
                            <Link href={'/'}>
                                <NavItem isActive={pathname === '/'}>Home</NavItem>
                            </Link>
                            <Link href={'/projects'}>
                                <NavItem isActive={pathname === '/projects'}>Projects</NavItem>
                            </Link>
                            <Link href={'/about'}>
                                <NavItem isActive={pathname === '/about'}>About</NavItem>
                            </Link>
                        </Nav>
                    </div>
                </div>
            </header>
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </>
    );
};

export default Header;
