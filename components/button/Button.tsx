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
      type="button"
      className={`${styles.button} ${white ? " text-white" : ""} px-3 py-2 ${
        small && "p-1"
      } hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
