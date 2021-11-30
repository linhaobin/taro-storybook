import type { SwiperProps } from '@tarojs/components/types/Swiper';
import { Meta } from '@storybook/react';

import { Swiper, SwiperItem } from '@tarojs/components';
import { CSSProperties } from 'react';

const meta: Meta = {
  title: 'Swiper',
  component: Swiper,
};

export const Base = (props: SwiperProps) => {
  const itemStyle: CSSProperties = {
    height: '100px',
    textAlign: 'center',
    lineHeight: '100px',
    color: '#fff',
  };
  return (
    <Swiper {...props}>
      <SwiperItem style={{ ...itemStyle, background: 'red' }}>Red</SwiperItem>
      <SwiperItem style={{ ...itemStyle, background: 'green' }}>Green</SwiperItem>
      <SwiperItem style={{ ...itemStyle, background: 'blue' }}>Blue</SwiperItem>
    </Swiper>
  );
};

export default meta;
