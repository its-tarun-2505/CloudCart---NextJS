"use client"
import React from "react";
import styles from "./signin.module.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const handleSignIn = async () => {
    await signIn("github", { callbackUrl: "/products" });
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign In using GitHub Please</h1>
      <button onClick={handleSignIn} className={styles.button}>Sign In</button>
    </div>
  );
};

export default LoginPage;
