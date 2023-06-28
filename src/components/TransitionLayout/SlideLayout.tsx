import { AnimatePresence, motion } from 'framer-motion';
import { BaseTransitionLayoutProps } from './transition-layout.types';

const SlideLayout = ({
  children,
  transitionKey,
}: BaseTransitionLayoutProps) => {
  return (
    <AnimatePresence mode='popLayout'>
      <motion.div
        key={transitionKey}
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default SlideLayout;
