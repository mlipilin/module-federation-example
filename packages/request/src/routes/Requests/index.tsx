import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

export type Props = {}

function Requests(props: Props) {
  const { ...otherProps } = props

  return (
    <div {...otherProps} className={styles.Requests}>
      <h1>Requests list</h1>
      <ul>
        <li>
          <Link to="1">Request #1</Link>
        </li>
        <li>
          <Link to="2">Request #2</Link>
        </li>
        <li>
          <Link to="3">Request #3</Link>
        </li>
      </ul>
    </div>
  )
}

Requests.defaultProps = {}

export default Requests
