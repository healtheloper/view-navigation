import { motion } from 'framer-motion';
import { BaseTransitionLayoutProps } from './transition-layout.types';

const FadeLayout = ({ children, transitionKey }: BaseTransitionLayoutProps) => {
  return (
    <motion.div
      key={transitionKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeLayout;
