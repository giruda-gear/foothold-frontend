'use client'

import NoteStatus from '@/app/ui/dashboard/notes/status'
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
import { useState } from 'react'
import { IoMdCheckboxOutline } from 'react-icons/io'
import { MdCheckBoxOutlineBlank } from 'react-icons/md'

export default function NotesPage() {
  const [count, setCount] = useState(0)

  const handleOnClick = () => {
    console.log('note handle onclick!')
  }

  return (
    <div className="mt-5 rounded-lg bg-bgSoft p-5">
      <div className="flex items-center justify-between">
        <Search onClick={handleOnClick} placeholder="Search .." />
        <Link href="/dashboard/notes/add">
          <button className="rounded-md bg-[#5d57c9] p-2.5">New</button>
        </Link>
      </div>
      <table className="w-full [&_td]:p-2.5">
        <thead>
          <tr>
            <td>Source</td>
            <td>Title</td>
            <td>URL</td>
            <td>Status</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Live Academy</td>
            <td>more than</td>
            <td>
              <a
                href="https://youtu.be/0LNx4zdMGO0?si=A_jkG4gD3eDFFFVZ"
                target="_blank"
              >
                https://youtu.be/0LNx4zdMGO0?si=A_jkG4gD3eDFFFVZ
              </a>
            </td>
            <td>
              <NoteStatus />
            </td>
            <td>11.01.2024</td>
          </tr>
          <tr>
            <td>News Article</td>
            <td>would have done</td>
            <td>
              <a
                href=" https://finance.yahoo.com/news/despite-free-access-gpt-4-165821010.html"
                target="_blank"
              >
                https://finance.yahoo.com/news/despite-free-access-gpt-4-165821010.html
              </a>
            </td>
            <td>
              <NoteStatus />
            </td>
            <td>11.01.2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
