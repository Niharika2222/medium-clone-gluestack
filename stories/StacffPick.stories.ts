import type { Meta, StoryObj } from '@storybook/react';

import StaffPick from "./StaffPick"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/StaffPick',
  component:StaffPick,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
AuthorName:{control:"text"},
description:{control:"text"},
ProfileImage:{control:"text"}
  },
} satisfies Meta<typeof StaffPick>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
   AuthorName:"Joyy",
   description:"hdgewdhjbejkwhu",
   ProfileImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAHgWsHJc33lBdA2hq9iCu6kFsHtyFH19kog&usqp=CAU"
  },
};



