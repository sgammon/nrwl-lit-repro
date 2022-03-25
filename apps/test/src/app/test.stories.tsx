import { Story, Meta } from '@storybook/react';
import { MyElementComponent } from './test';

export default {
  component: MyElementComponent,
  title: 'My Element',
} as Meta;

const Template: Story = (args) => <MyElementComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
