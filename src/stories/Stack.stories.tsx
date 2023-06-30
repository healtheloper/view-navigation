import type { Meta, StoryObj } from '@storybook/react';

import Stack, { StackActions } from '../components/Navigator/Stack';
import First from '../pages/First';
import { ReactElement, useRef } from 'react';

const meta: Meta<typeof Stack> = {
  component: Stack,
};

export default meta;
type Story = StoryObj<typeof meta>;

const StackTemplateView = ({ ...args }) => {
  const stackRef = useRef<StackActions>(null);

  const handleHistoryPush = (component: ReactElement) => {
    stackRef.current?.push(component);
  };

  return (
    <Stack {...args} ref={stackRef} initHistory='First'>
      <First name='First' onNext={handleHistoryPush} />
    </Stack>
  );
};

export const StackTemplate: Story = {
  render: StackTemplateView,
};

export const Fade = {
  ...StackTemplate,
  args: {
    transitionOption: {
      type: 'fade',
    },
  },
};

export const Slide = {
  ...StackTemplate,
  args: {
    transitionOption: {
      type: 'slide',
    },
  },
};

export const None = {
  ...StackTemplate,
  args: {
    transitionOption: {
      type: 'none',
    },
  },
};
