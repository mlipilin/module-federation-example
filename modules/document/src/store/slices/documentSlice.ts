import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type DocumentType = {
  id: number
  name: string
  error: string
}

interface DocumentsState {
  documents: DocumentType[]
}

const initialState: DocumentsState = {
  documents: [],
}

export const documentsSlice = createSlice({
  name: 'documents',
  initialState,
  reducers: {
    addDocument: (state, { payload }: PayloadAction<DocumentType>) => {
      state.documents.push(payload)
    },
    deleteDocument: (state, { payload: documentId }: PayloadAction<number>) => {
      state.documents = state.documents.filter((doc) => doc.id !== documentId)
    },
  },
})

export const { addDocument, deleteDocument } = documentsSlice.actions

export default documentsSlice.reducer
