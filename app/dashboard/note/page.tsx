'use client'

import Search from '@/app/ui/dashboard/search/search'

export default function NotePage() {
  const handleOnClick = () => {
    console.log('note handle onclick!')
  }

  return (
    <div className="mt-5 rounded-lg bg-bgSoft p-5">
      <div className="flex items-center justify-between ">
        <Search onClick={handleOnClick} placeholder="Search .." />
      </div>
      <div>b</div>
    </div>
  )
}
