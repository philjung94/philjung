import React from "react"
import nonce from "../helpers/nonce"

export default function MyTable({columns, dataSource}) {
  if (!dataSource) return <div/>
  const colMap = columns.reduce((acc, cv, index) => {
    acc[cv] = index
    return acc
  }, {})
  return (
    <table className="ui table">
      <thead>
        <tr>
          {
            columns.map(column => (
              <th key={nonce(12)}>
                {column}
              </th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          dataSource.map(row => (
            <tr key={nonce(12)}>
              {
                Object.keys(row).sort((a, b) => (
                  colMap[a] - colMap[b]
                )).map(cv => (
                  <td key={nonce(12)}>
                    { row[cv] }
                  </td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}