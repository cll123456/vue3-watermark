import App from './App';
import {mount} from '@vue/test-utils';

describe('waterMark.ts',() => {
  let wrapper:any;
  beforeAll(async () => {
    // 挂载app
    wrapper = mount(App);
    console.log(wrapper.html());
  })
  // 断言
  /**
   * url(data:image/png;base64
   */
  it('it render background-image prop', () => {
    const appDom = wrapper.find('#app');
    expect(appDom.attributes("v-watermark")).toBe("[object Object]")
  })
})