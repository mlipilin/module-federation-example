import React from 'react'
import { Link, useParams } from 'react-router-dom'

import styles from './styles.module.scss'

// @ts-ignore
const Documents = React.lazy(() => import('moduleDocument/Documents'))

export type Props = {}

function Request(props: Props) {
  const { ...otherProps } = props

  const params = useParams()

  return (
    <div {...otherProps} className={styles.Request}>
      <Link to="..">&lt;- Back</Link>
      <h1>Request #{params.id}</h1>
      <React.Suspense>
        <Documents requestId={Number(params.id)} />
      </React.Suspense>
    </div>
  )
}

Request.defaultProps = {}

export default Request
