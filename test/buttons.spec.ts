import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import Button from '../components/Button.vue';

test('Test Default slot', () => {
  const wrapper = mount(Button, {
    slots: {
      default: 'default',
    },
  });

  expect(wrapper.text()).toBe('default');
});
