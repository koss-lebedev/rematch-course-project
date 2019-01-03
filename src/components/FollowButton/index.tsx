import React, { FC, memo, ButtonHTMLAttributes } from 'react'
import { Button } from './styled'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive: boolean
}

const FollowButton: FC<ButtonProps> = memo(({ isActive, ...rest }) => (
  <Button isActive={isActive} {...rest}>
    {isActive ? '✔ Following' : 'Follow'}
  </Button>
))

export default FollowButton
