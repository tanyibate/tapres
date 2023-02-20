import styles from "./button-styles.module.scss";

export default function Button({
  children,
  white,
}: {
  children: React.ReactNode;
  white?: boolean;
}) {
  return (
    <button className={`${styles.button} + ${white ? " text-white" : ""}`}>
      {children}
    </button>
  );
}
