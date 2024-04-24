import { useTable, useSortBy } from 'react-table'
import '../style/StatisticsTable.css'
import { useMemo } from 'react'
import { ColumnsUser } from './ColumnsTable'

const TableStatisticUser = ({ data }) => {
    const columns = useMemo(() => ColumnsUser, [])

    const tableInstance = useTable({
        columns,
        data
    }, useSortBy)

    const { getTableProps, getTableBodyProps, rows, prepareRow } = tableInstance
    return (
        <>
            <table {...getTableProps()}>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map((row, rowIndex) => {
                            prepareRow(row)
                            return (
                                <tr key={rowIndex} {...row.getRowProps()}>
                                    {row.cells.map((cell, cellIndex) => {
                                        return <td key={cellIndex} {...cell.getCellProps()} className="my-custom-cell">{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default TableStatisticUser
