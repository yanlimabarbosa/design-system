import type { StoryObj, Meta } from '@storybook/react'
import { Button } from '@ignite-ui/react'

// Define the Button props explicitly for Storybook
type ButtonProps = React.ComponentProps<typeof Button>

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    size: '', // Example of typing an arg with improved autocomplete
  },
}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'smal', // 'smal' seems like a typo; should probably be 'small'
  },
}
