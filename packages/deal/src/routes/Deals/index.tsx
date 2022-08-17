import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

export type Props = {}

function Deals(props: Props) {
  const { ...otherProps } = props

  return (
    <div {...otherProps} className={styles.Deals}>
      <h1>Deals list</h1>
      <ul>
        <li>
          <Link to="1">Deal #1</Link>
        </li>
        <li>
          <Link to="2">Deal #2</Link>
        </li>
        <li>
          <Link to="3">Deal #3</Link>
        </li>
      </ul>
    </div>
  )
}

Deals.defaultProps = {}

export default Deals
