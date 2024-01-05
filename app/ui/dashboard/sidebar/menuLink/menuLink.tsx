'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './menuLink.module.css'

interface MenuLinkProps {
  item: {
    title: string
    path: string
    icon: JSX.Element
  }
}

export default function MenuLink({ item }: MenuLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        item.path === pathname && styles.active
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  )
}
