import { useState } from 'react'
import { IoMdCheckboxOutline } from 'react-icons/io'
import { MdCheckBoxOutlineBlank } from 'react-icons/md'

interface CheckedItems {
  [key: string]: boolean
}

export default function NoteStatus({ status }: { status: number }) {
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({
    checkbox1: status >= 1,
    checkbox2: status >= 2,
    checkbox3: status >= 3,
  })

  const handleCheckboxChange = (checkboxName: string) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [checkboxName]: !prevCheckedItems[checkboxName],
    }))
  }

  return (
    <div className="flex shrink">
      {Object.keys(checkedItems).map((key) => (
        <label key={key} className="flex align-middle">
          <input
            type="checkbox"
            className="appearance-none"
            checked={checkedItems[key] || false}
            onChange={() => handleCheckboxChange(key)}
          />
          {checkedItems[key] ? (
            <IoMdCheckboxOutline size="25" style={{ color: 'pink' }} />
          ) : (
            <MdCheckBoxOutlineBlank size="25" />
          )}
        </label>
      ))}
    </div>
  )
}
