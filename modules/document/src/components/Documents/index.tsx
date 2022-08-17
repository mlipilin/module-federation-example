import styles from './styles.module.scss'

export type Props = {
  requestId: number
}

function Documents(props: Props) {
  const { requestId } = props

  const items = Array.from(new Array(requestId)).map((item, index) => (
    <li key={index}>Документ {index + 1}</li>
  ))

  return (
    <div className={styles.Documents}>
      <h2>Документы для заявки №{requestId}</h2>
      <ul>{items}</ul>
    </div>
  )
}

Documents.defaultProps = {}

export default Documents
