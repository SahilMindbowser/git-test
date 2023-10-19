import type { Meta, StoryObj } from "@storybook/react";
import { TabSwitch } from "./TabSwitch";

const meta = {
  title: "Components/TabSwitch",
  component: TabSwitch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tabs: { control: "array" },
  },
} satisfies Meta<typeof TabSwitch>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: ["Tab 1", "Tab 2", "Tab 3"],
  },
};

export default meta;
