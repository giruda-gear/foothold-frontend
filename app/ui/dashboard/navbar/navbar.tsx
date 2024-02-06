'use client'

import { usePathname } from 'next/navigation'
import styles from './navbar.module.css'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split('/').pop()}</div>
    </div>
  )
}
