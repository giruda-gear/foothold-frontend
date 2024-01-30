import Image from 'next/image'
import MenuLink from './menuLink/menuLink'
import styles from './sidebar.module.css'
import { MdSpaceDashboard, MdLogout, MdOutlineNotes } from 'react-icons/md'
import { RiDashboard3Fill } from 'react-icons/ri'
import { HiBookmarkAlt } from 'react-icons/hi'

const menuItems = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdSpaceDashboard />,
      },
      {
        title: 'Notes',
        path: '/dashboard/notes',
        icon: <MdOutlineNotes />,
      },
      {
        title: 'Schedule',
        path: '/dashboard/schedule',
        icon: <RiDashboard3Fill />,
      },
    ],
  },
  // {
  //   title: 'DIFFICULTY',
  //   list: [
  //     {
  //       title: 'Easy',
  //       path: '/easy',
  //       icon: <HiBookmarkAlt />,
  //     },
  //     {
  //       title: 'Medium',
  //       path: '/medium',
  //       icon: <HiBookmarkAlt />,
  //     },
  //     {
  //       title: 'Hard',
  //       path: '/hard',
  //       icon: <HiBookmarkAlt />,
  //     },
  //   ],
  // },
]

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          width="50"
          height="50"
          alt=""
        />
        <div>
          <span className={styles.userName}>Hey, Stranger</span>
        </div>
      </div>
      <ul>
        {menuItems.map((category) => (
          <li key={category.title}>
            <span>{category.title}</span>
            {category.list.map((item) => (
              <MenuLink key={item.title} item={item} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout />
        Logout
      </button>
    </div>
  )
}
