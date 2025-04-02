import { motion, AnimatePresence } from "framer-motion";
import Button from "../button/Button";
import styles from "./mobile-menu-styles.module.scss";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  route: string;
}

const MobileMenu = ({ isOpen, onClose, route }: MobileMenuProps) => {
  const menuItems = ["Home", "About", "Properties", "Invest", "Contact"];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black"
        >
          <div className="h-full flex flex-col justify-center items-center">
            <nav className="flex flex-col items-center space-y-8">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item === "Invest" ? (
                    <Link
                      href="/invest"
                      className="text-2xl text-white hover:text-gold transition-colors"
                      onClick={onClose}
                    >
                      {item}
                    </Link>
                  ) : (
                    <a
                      href={`/#${
                        item === "Home" ? "landing" : item.toLowerCase()
                      }-section`}
                      className="text-2xl text-white hover:text-gold transition-colors"
                      onClick={onClose}
                    >
                      {item}
                    </a>
                  )}
                </motion.div>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
