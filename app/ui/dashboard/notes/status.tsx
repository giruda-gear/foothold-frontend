import { useState } from 'react'
import { IoMdCheckboxOutline } from 'react-icons/io'
import { MdCheckBoxOutlineBlank } from 'react-icons/md'

interface CheckedItems {
  [key: string]: boolean
}

export default function NoteStatus() {
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
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
            <IoMdCheckboxOutline size="25" />
          ) : (
            <MdCheckBoxOutlineBlank size="25" />
          )}
        </label>
      ))}
    </div>
  )
}
