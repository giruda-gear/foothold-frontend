import Image from 'next/image'

export default function RightBar() {
  return (
    <div className="fixed">
      <div className="relative mb-5 rounded-[10px] bg-bgSoft bg-gradient-to-t from-[#182237] to-[#253352] px-6 py-5">
        <div className="absolute bottom-0 right-0 h-1/2 w-1/2">
          <Image
            className="object-cover opacity-20"
            src="/astronaut.png"
            alt=""
            fill
          />
        </div>
        <div className="flex flex-col gap-5">
          <span>🔥 UPDATED!</span>
          <h3>how to use this?</h3>
          <p>new features use this ajifojweoflasfdlanflksakfnewiof</p>
          <button className="w-max items-center rounded-[10px] border-none bg-[#5d57c9] p-2.5">
            Try !
          </button>
        </div>
      </div>
      <div className="rounded-[5px] bg-bgSoft px-6 py-5">
        <h3>Discord Channel</h3>
        <p>talk with users in our discord channel!</p>
      </div>
    </div>
  )
}
