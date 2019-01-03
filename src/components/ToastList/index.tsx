import React, { FC } from 'react'
import { Toast } from '../../common/types'
import { Container, ToastItem } from './styled'

type ToastListProps = {
  toasts: ReadonlyArray<Toast>
}

const ToastList: FC<ToastListProps> = ({ toasts }) => (
  <Container>
    {toasts.map(toast => (
      <ToastItem key={toast.id}>
        {toast.message}
      </ToastItem>
    ))}
  </Container>
)

export default ToastList
