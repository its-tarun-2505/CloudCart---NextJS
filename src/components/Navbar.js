"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  const { data: session } = useSession();

  return (  
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <img
          src="/assets/logo.png"
          alt="CartCloud Logo"
          width={200}
          height={60}
        />
      </Link>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        {!session && <Link href="/login">Login</Link>}
        {session && <button className={styles.button} onClick={() => signOut()}>Sign Out</button>}
      </nav>
    </div>
  );
};

export default Navbar;
