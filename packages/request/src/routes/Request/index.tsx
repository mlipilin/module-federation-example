import { Link, useParams } from 'react-router-dom'

import styles from './styles.module.scss'

export type Props = {}

function Request(props: Props) {
  const { ...otherProps } = props

  const params = useParams()

  return (
    <div {...otherProps} className={styles.Request}>
      <Link to="..">&lt;- Back</Link>
      <h1>Request #{params.id}</h1>
    </div>
  )
}

Request.defaultProps = {}

export default Request
