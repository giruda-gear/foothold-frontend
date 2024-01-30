import { MdSearch } from 'react-icons/md'

export default function Search({
  onClick,
  placeholder
}: {
  onClick?: React.MouseEventHandler,
  placeholder?: string
}) {
  return (
    <div className="bg-bgHazy flex items-center gap-3 rounded-lg p-3">
      <input
        type="text"
        className="border-none bg-transparent text-white outline-none"
        placeholder={placeholder}
      />
      <div onClick={onClick}>
        <MdSearch size={20} />
      </div>
    </div>
  )
}
