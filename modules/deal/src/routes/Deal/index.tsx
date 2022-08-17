import { Link, useParams } from 'react-router-dom'

import styles from './styles.module.scss'

export type Props = {}

function Deal(props: Props) {
  const { ...otherProps } = props

  const params = useParams()

  return (
    <div {...otherProps} className={styles.Deal}>
      <Link to="..">&lt;- Back</Link>
      <h1>Deal #{params.id}</h1>
    </div>
  )
}

Deal.defaultProps = {}

export default Deal
