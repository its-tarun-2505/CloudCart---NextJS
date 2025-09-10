"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./navbar.module.css";

const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (  
    <header className={styles.container}>
      {/* Logo */}
      <Link href="/" className={styles.logo}>
        <img
          src="/assets/logo.png"
          alt="CartCloud Logo"
          width={160}
          height={50}
        />
      </Link>


      {/* Hamburger Toggle */}
      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Desktop Nav */}
      <nav className={`${styles.nav} ${isOpen ? styles.show : ""}`}>
        <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="/products" onClick={() => setIsOpen(false)}>Products</Link>
        {!session && (
          <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
        )}
        {session && (
          <button
            className={styles.button}
            onClick={() => {
              setIsOpen(false);
              signOut();
            }}
          >
            Sign Out
          </button>
        )}
      </nav>

    </header>
  );
};

export default Navbar;
