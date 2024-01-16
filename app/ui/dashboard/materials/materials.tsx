// import styles from './materials.module.css'

export default function Materials() {
  return (
    <div className="rounded-[10px] bg-bgSoft p-2.5">
      <h2 className="font-[200] text-textSoft">Latest Materials</h2>
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
              <span className="rounded-md bg-[#afd6ee75] p-[5px] text-sm">
                ongoing
              </span>
            </td>
            <td>11.01.2024</td>
          </tr>
          <tr>
            <td>would have done</td>
            <td>News Article</td>
            <td>
              <span className="rounded-md bg-[#f7cb7375] p-[5px] text-sm">
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
