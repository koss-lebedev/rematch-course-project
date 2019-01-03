import React, { FC } from 'react'
import { Panel, Badge } from './styled'

type HeaderProps = {
  count: number
}

const Header: FC<HeaderProps> = ({ count }) => (
  <Panel>
    Following <Badge>{count}</Badge> people
  </Panel>
)

export default Header
