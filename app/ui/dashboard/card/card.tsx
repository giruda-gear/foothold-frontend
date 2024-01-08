import styles from './card.module.css'
import { MdBarChart } from 'react-icons/md'

export default function Card() {
  return (
    <div className={styles.container}>
      <MdBarChart size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>statics title</span>
        <span className={styles.number}>100.22</span>
        <span className={styles.detail}>detail</span>
      </div>
    </div>
  )
}
