import React, { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  addDocument,
  deleteDocument,
  DocumentType,
} from '../../store/slices/documentSlice'

import styles from './styles.module.scss'

export type Props = {
  requestId: number
  onDocumentsChange?: (documents: DocumentType[]) => void
}

export function generateRandom(maxLimit = 100) {
  let rand = Math.random() * maxLimit

  rand = Math.floor(rand)

  return rand
}

function generateNewItem(docName: string): DocumentType {
  return {
    id: generateRandom(),
    name: docName,
    error: Math.random() > 0.8 ? 'has error' : '',
  }
}

function Documents(props: Props) {
  const { requestId, onDocumentsChange } = props

  const [docName, setDocName] = useState('')

  const documents = useAppSelector((state) => state.documents.documents)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (typeof onDocumentsChange === 'function') {
      onDocumentsChange(documents)
    }
  }, [documents, onDocumentsChange])

  const handleChangeDocumentName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setDocName(value)
  }

  const handleAddDocument = (_: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(addDocument(generateNewItem(docName)))
    setDocName('')
  }

  const handleDeleteDoc =
    (docId: number) => (_: React.MouseEvent<HTMLButtonElement>) => {
      dispatch(deleteDocument(docId))
    }

  return (
    <div className={styles.Documents}>
      <div>
        <h2>Новый документ</h2>

        <input
          type="text"
          name="document"
          placeholder="Введите название документа"
          value={docName}
          onChange={handleChangeDocumentName}
        />

        <button disabled={!docName} onClick={handleAddDocument}>
          Добавить
        </button>
      </div>

      <h2>Документы для заявки №{requestId}</h2>

      <ul>
        {documents.map((doc: any) => (
          <li key={`${doc.id}_${doc.name}`}>
            <span>{doc.name}</span>
            <button onClick={handleDeleteDoc(doc.id)}>x</button>
            {doc.error && (
              <span
                style={{
                  color: 'red',
                }}
              >
                {doc.error}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

Documents.defaultProps = {}

export default Documents
