import styles from "./button-styles.module.scss";

export default function Button({
  children,
  white,
  small,
  onClick,
}: {
  children: React.ReactNode;
  white?: boolean;
  small?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className={`${styles.button} + ${white ? " text-white" : ""} px-3 py-2 ${
        small && "p-1"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
