// import styles from './materials.module.css'

export default function Materials() {
  return (
    <div className="bg-bgSoft p-2.5 rounded-[10px]">
      <h2 className="text-textSoft font-[200]">Latest Materials</h2>
      <table className="w-full [&_td]:p-2.5">
        <thead>
          <tr>
            <td>Title</td>
            <td>Source</td>
            <td>Status</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>more than</td>
            <td>Live Academy</td>
            <td>
              <span className="p-[5px] text-sm bg-[#afd6ee75] rounded-md">
                ongoing
              </span>
            </td>
            <td>11.01.2024</td>
          </tr>
          <tr>
            <td>would have done</td>
            <td>News Article</td>
            <td>
              <span className="p-[5px] text-sm bg-[#f7cb7375] rounded-md">
                pending
              </span>
            </td>
            <td>11.01.2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
