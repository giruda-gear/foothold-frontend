'use client'

import { usePathname } from 'next/navigation'
import styles from './navbar.module.css'
import Search from '../search/search'

export default function Navbar() {
  const pathname = usePathname()
  const handleOnClick = () => {
    console.log('nav handle onclick!')
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split('/').pop()}</div>
      <Search onClick={handleOnClick} placeholder="Search .." />
    </div>
  )
}
