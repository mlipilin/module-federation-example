import styles from './styles.module.scss'

export type Props = {}

function Login(props: Props) {
  const { ...otherProps } = props

  return (
    <div {...otherProps} className={styles.Login}>
      <h1>Sign In</h1>
    </div>
  )
}

Login.defaultProps = {}

export default Login
