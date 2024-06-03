import type { Meta, StoryObj } from '@storybook/angular';
import { AddUserComponent } from './add-user.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AddUserComponent> = {
  component: AddUserComponent,
  title: 'AddUserComponent',
};
export default meta;
type Story = StoryObj<AddUserComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/add-user works!/gi)).toBeTruthy();
  },
};
