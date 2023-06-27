import { useContext } from 'react';
import { ViewNavigationHistoryContext } from './Stack';

export const useViewNavHistoryAction = () => {
  const context = useContext(ViewNavigationHistoryContext);
  if (!context) {
    throw new Error(
      'useViewNavHistoryAction hook 은 Stack Navigator 내에서만 사용할 수 있습니다.'
    );
  }
  return context;
};
