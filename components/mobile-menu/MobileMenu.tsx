import { motion, AnimatePresence } from "framer-motion";
import Button from "../button/Button";
import styles from "./mobile-menu-styles.module.scss";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
  isButton?: boolean;
  isExternal?: boolean;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  route: string;
  navLinks?: NavLink[];
}

const MobileMenu = ({ isOpen, onClose, route, navLinks }: MobileMenuProps) => {
  const links = navLinks || [];

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
              {links.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.isExternal || link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                    <Link
                      href={link.href}
                      className="text-2xl text-white hover:text-gold transition-colors"
                      onClick={onClose}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-2xl text-white hover:text-gold transition-colors"
                      onClick={onClose}
                    >
                      {link.label}
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
