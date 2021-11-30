import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from '@tarojs/components';
import { PropsWithChildren } from 'react';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export const Base = Button as Story<PropsWithChildren<ButtonProps>>;
Base.args = {
  children: 'Hello',
};

export default meta;
