import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  className = "",
  as: Component = "button",
  ...props
}) {
  const styles = {
    primary: "btn-primary",
    ghost: "btn-ghost",
  };

  const MotionComponent =
    typeof Component === "string"
      ? motion[Component]
      : motion(Component);

  return (
    <MotionComponent
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className={`${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
