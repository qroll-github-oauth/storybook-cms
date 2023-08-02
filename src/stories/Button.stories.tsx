import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    styleType: "primary",
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    styleType: "secondary",
    children: "Secondary",
  },
};

export const CustomChildren: Story = {
  args: {
    styleType: "primary",
    children: (
      <>
        <span
          style={{
            display: "inline-block",
            width: "1rem",
            height: "1rem",
            background: "#888",
            borderRadius: "50%",
          }}
        />
        Label
      </>
    ),
  },
};
