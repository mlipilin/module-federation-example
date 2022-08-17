import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export type Props = {
  name: string
}

function Profile(props: Props) {
  const { name, ...otherProps } = props

  return (
    <div {...otherProps} className={styles.Profile}>
      {name}
      <Link to="/auth/login">выйти</Link>
    </div>
  )
}

Profile.defaultProps = {}

export default Profile
