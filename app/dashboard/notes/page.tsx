'use client'

import NoteStatus from '@/app/ui/dashboard/notes/status'
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Note {
  id: number
  title: string
  content: string
  url: string
  status: string
  created: string
  updated: string
  tags: Tag[]
}

interface Tag {
  id: number
  name: string
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[] | null>(null)

  async function fetchNotes() {
    const response = await fetch('/api/notes/', {
      method: 'GET',
    })
    const data = await response.json()
    setNotes(data)
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  const handleSearch = () => {
    console.log('note handle onclick!')
  }

  return (
    <div className="mt-5 rounded-lg bg-bgSoft p-5">
      <div className="flex items-center justify-between">
        <Search onClick={handleSearch} placeholder="Search .." />
        <Link href="/dashboard/notes/add">
          <button className="rounded-md bg-[#5d57c9] p-2.5">New</button>
        </Link>
      </div>
      {notes ? (
        <table className="w-full [&_td]:p-2.5">
          <thead>
            <tr>
              <td>Title</td>
              <td>Desc</td>
              <td>Tags</td>
              <td>Status</td>
              <td>Created</td>
              <td>Updated</td>
            </tr>
          </thead>
          <tbody>
            {notes.map((note) => (
              <tr key={note.id}>
                <td>
                  <a href={note.url} target="_blank">
                    {note.title}
                  </a>
                </td>
                <td>{note.content}</td>
                <td>
                  {note.tags.map((tag) => (
                    <span className="p-0.5" key={tag.id}>
                      #{tag.name}
                    </span>
                  ))}
                </td>
                <td>
                  <NoteStatus status={Number(note.status)} />
                </td>
                <td>{note.created.toLocaleString()}</td>
                <td>{note.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div></div>
      )}
    </div>
  )
}
