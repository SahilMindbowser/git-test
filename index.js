// RadioGroup.stories.tsx
import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Label} from '../app/components/ui/label';
import {RadioGroup, RadioGroupItem} from '../app/components/ui/radio-group'; // Replace with your actual import path

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2 bg-red-500">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
    </RadioGroup>
  );
};

export const Default = Template.bind({});
Default.args = {
  // Add any props you want to showcase
};
//asdhjsajsda
//asdhjsajsda
//dsfjhdfsjhg
