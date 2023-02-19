import styles from "./button-styles.module.scss";

export default function Button({ children }: { children: React.ReactNode }) {
  return <button className={styles.button}>{children}</button>;
}
