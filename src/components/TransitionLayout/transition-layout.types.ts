import type { Key, PropsWithChildren } from 'react';

export type BaseTransitionLayoutProps = {
  transitionKey: Key;
} & PropsWithChildren;

export type TransitionOption = {
  type: 'slide' | 'fade' | 'none';
};

export type TransitionLayoutProps = TransitionOption &
  BaseTransitionLayoutProps;
