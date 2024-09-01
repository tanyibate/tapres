import styles from "./button-styles.module.scss";

export default function Button({
  children,
  white,
  small,
}: {
  children: React.ReactNode;
  white?: boolean;
  small?: boolean;
}) {
  return (
    <button
      className={`${styles.button} + ${white ? " text-white" : ""} px-3 py-2 ${
        small && "p-1"
      }`}
    >
      {children}
    </button>
  );
}
