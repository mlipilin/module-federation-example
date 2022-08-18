import React, { useCallback, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import styles from './styles.module.scss'

// @ts-ignore
const Documents = React.lazy(() => import('moduleDocument/Documents'))

type DocumentType = {
  id: number
  name: string
  error: string
}

export type Props = {}

function Request(props: Props) {
  const { ...otherProps } = props

  const [isDisabledVerifyButton, setIsDisabledVerifyButton] = useState(true)
  const [active, setActive] = useState(false)

  const params = useParams()

  const onDocumentsChange = useCallback(
    (documents: DocumentType[]) => {
      const isNeedDisabledButton =
        documents.length === 0 || documents.some((doc) => !!doc.error)
      setIsDisabledVerifyButton(isNeedDisabledButton)
    },
    [setIsDisabledVerifyButton]
  )

  const handleSendToVerify = (_: React.MouseEvent<HTMLButtonElement>) => {
    setActive(true)
    console.log('Have been sent to Verify')
  }

  console.log('active ->', active)

  return (
    <div {...otherProps} className={styles.Request}>
      <Link to="..">&lt;- Back</Link>
      <h1>Request #{params.id}</h1>
      <React.Suspense fallback="Loading...">
        <Documents
          requestId={Number(params.id)}
          onDocumentsChange={onDocumentsChange}
        />

        <Documents requestId={2} onDocumentsChange={onDocumentsChange} />
        <Documents requestId={3} onDocumentsChange={onDocumentsChange} />
      </React.Suspense>
      <hr
        style={{
          marginBottom: '25px',
        }}
      />
      <div>
        <button disabled={isDisabledVerifyButton} onClick={handleSendToVerify}>
          Отправить на анализ
        </button>
      </div>
    </div>
  )
}

Request.defaultProps = {}

export default Request
