export default function Notes() {
  return (
    <div className="rounded-[10px] bg-bgSoft p-2.5">
      <h2 className="font-[200] text-textSoft">Latest Materials</h2>
      <table className="w-full [&_td]:p-2.5">
        <thead>
          <tr>
            <td>Source</td>
            <td>Title</td>
            <td>Status</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Live Academy</td>
            <td>more than</td>
            <td>
              <span className="rounded-md bg-[#afd6ee75] p-[5px] text-sm">
                ongoing
              </span>
            </td>
            <td>11.01.2024</td>
          </tr>
          <tr>
            <td>News Article</td>
            <td>would have done</td>
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
