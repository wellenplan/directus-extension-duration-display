import { mount } from "@vue/test-utils";
import DisplayComponent from "./../display.vue";

const props = [
  {},
  {
    value: 1,
  },
  {
    value: 60,
  },
];

describe("duration", () => {
  describe("display", () => {
    it.each(props)("should render %s", (props: any) => {
      const wrapper = mount(DisplayComponent, {
        props: props,
      });
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
