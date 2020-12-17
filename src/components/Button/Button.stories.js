import Button from "./Button";
import { action } from "@storybook/addon-actions";

export default {
  title: "Form/Button",
  component: Button,
  excludeStories: /.*Data$/
};

export const actionsData = {
  click: action("click")
};

const TemplateWithText = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  methods: actionsData,
  template: '<Button v-bind="$props" @onClick="click">Click Me!</Button>'
});

export const MediumWithText = TemplateWithText.bind({});
MediumWithText.args = {
  icon: "pencil",
  color: "danger",
  size: "medium"
};

export const SmallWithText = TemplateWithText.bind({});
SmallWithText.args = {
  icon: "pencil",
  color: "danger",
  size: "small"
};

const TemplateWithoutText = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  methods: actionsData,
  template: '<Button v-bind="$props" @onClick="click" />'
});

export const MediumWithoutText = TemplateWithoutText.bind({});
MediumWithoutText.args = {
  icon: "pencil",
  color: "danger",
  size: "medium"
};

export const SmallWithoutText = TemplateWithoutText.bind({});
SmallWithoutText.args = {
  icon: "pencil",
  color: "danger",
  size: "small"
};
