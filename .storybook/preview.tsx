import { DecoratorFn } from '@storybook/react';

import { defineCustomElements, applyPolyfills } from '@tarojs/components/loader';

import '@tarojs/components/dist/taro-components/taro-components.css';

export const decorators: DecoratorFn[] = [
  (Story) => {
    applyPolyfills().then(function () {
      defineCustomElements(window);
    });

    return <Story />;
  },
];
