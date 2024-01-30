import Image from "next/image";
import styles from "./page.module.css";
import Login from "@/components/Login";
import { authenticateUser } from "@/actions/userActions";

export default function Home() {
  return (
    <main className={styles.main}>
      <Login onSubmit={authenticateUser} />
    </main>
  );
}
