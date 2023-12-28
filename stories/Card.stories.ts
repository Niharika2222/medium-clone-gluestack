import type { Meta, StoryObj } from '@storybook/react';

import Card from "./Card"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  blogImage:{ control: "text" },
  profileImage:{control:"text"}
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
   blogImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAHgWsHJc33lBdA2hq9iCu6kFsHtyFH19kog&usqp=CAU",
   profileImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAHgWsHJc33lBdA2hq9iCu6kFsHtyFH19kog&usqp=CAU"
  },
};



