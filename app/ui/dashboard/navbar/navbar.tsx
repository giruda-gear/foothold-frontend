'use client'

import { usePathname } from 'next/navigation'
import styles from './navbar.module.css'
import { MdSearch } from 'react-icons/md'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split('/').pop()}</div>
      <div className={styles.search}>
        <input type="text" className={styles.input} placeholder='Search ..'/>
        <MdSearch size={20} />
      </div>
    </div>
  )
}
