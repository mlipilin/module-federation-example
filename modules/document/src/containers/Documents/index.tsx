import { useMemo } from 'react'
import { Provider } from 'react-redux'

import { createStore } from '../../store/store'

import Documents from '../../components/Documents'

const DocumentsContainer = (props: any) => {
  const store = useMemo(() => createStore(), [])

  if (!store) return null

  return (
    // @ts-ignore
    <Provider store={store}>
      <Documents {...props} />
    </Provider>
  )
}

export default DocumentsContainer
