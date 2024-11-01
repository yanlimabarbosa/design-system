import type { StoryObj, Meta } from '@storybook/react'
import { Button } from '@ignite-ui/react'

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
    size: '',
  },
}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'smal',
  },
}
