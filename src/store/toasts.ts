import { Toast } from '../common/types'
import { RematchDispatch } from '@rematch/core'

type State = ReadonlyArray<Toast>

const model = {
  state: [] as State,
  reducers: {
    added: (state: State, toast: Toast) => [toast, ...state],
    removed: (state: State, toast: Toast) => state.filter(t => t.id !== toast.id),
  },
  effects: (dispatch: RematchDispatch) => ({
    async add(message: string) {
      const toast: Toast = { message, id: new Date().getTime() }
      dispatch.toasts.added(toast)
      await new Promise(r => setTimeout(r, 2000))
      dispatch.toasts.removed(toast)
    }
  })
}

export default model
