import { ComponentPropsWithoutRef, ElementType, ReactElement } from 'react';

export type ScreenComponent<T extends ElementType = 'div'> = ReactElement<
  ScreenComponentProps<T>
>;

export type ScreenComponentProps<T extends ElementType> = {
  name: string;
  onNext: (component: ScreenComponent) => void;
} & ComponentPropsWithoutRef<T>;
