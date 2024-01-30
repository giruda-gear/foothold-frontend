import Card from '../ui/dashboard/card/card'
import Chart from '../ui/dashboard/chart/chart'
import styles from '../ui/dashboard/dashboard.module.css'
import Notes from '../ui/dashboard/notes/notes'
import RightBar from '../ui/dashboard/rightbar/rightbar'

export default function DashBoard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card title="Time Nedded" />
          <Card title="Difficuclty" />
          <Card title="Topics" />
        </div>
        <Notes />
        <Chart />
        <div>something new!!</div>
        <div>something new!!</div>
        <div>something new!!</div>
        <div>something new!!</div>
        <div>something new!!</div>
        <div>something new!!</div>
        <div>something new!!</div>
      </div>
      <div className="flex-1">
        <RightBar />
      </div>
    </div>
  )
}
