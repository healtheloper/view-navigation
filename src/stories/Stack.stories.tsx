import type { Meta, StoryObj } from '@storybook/react';

import Stack from '../components/Navigator/Stack';
import Screen from '../components/Navigator/Screen';
import First from '../pages/First';
import Second from '../pages/Second';

const meta: Meta<typeof Stack> = {
  component: Stack,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const StackTemplate: Story = {
  render: ({ ...args }) => (
    <Stack {...args}>
      <Screen name='First'>
        <First />
      </Screen>
      <Screen name='Second'>
        <Second />
      </Screen>
    </Stack>
  ),
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
