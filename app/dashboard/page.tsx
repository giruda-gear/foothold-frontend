import Card from '../ui/dashboard/card/card'
import styles from '../ui/dashboard/dashboard.module.css'
import RightBar from '../ui/dashboard/rightbar/rightbar'

export default function DashBoard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <div>something new!</div>
        <div>something new!!</div>
      </div>
      <RightBar />
    </div>
  )
}
