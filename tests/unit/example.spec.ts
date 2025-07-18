import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/views/Home.vue';

describe('Home.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
});
