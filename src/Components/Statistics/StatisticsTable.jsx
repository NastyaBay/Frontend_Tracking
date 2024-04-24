import { useTable, useSortBy } from 'react-table'
import '../style/StatisticsTable.css'


const StatisticsTable = ({ data, columns }) => {
    const tableInstance = useTable({
        columns,
        data
    }, useSortBy)

    const handleRowClick = () => {
        if (typeof window !== 'undefined') {
            window.location.href = '/statistic/user';
        }
    };

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance
    return (
        <>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup, index) => (<tr key={index} {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column, columnIndex) => (
                            <th key={columnIndex} {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                <span>
                                    {column.isSorted ? (column.isSortedDesc ?
                                        <img role="img" class="emoji" alt="▼" src='/icons/downTable.svg' />
                                        : <img role="img" class="emoji" alt="▲" src='/icons/upTable.svg' />)
                                        : ''}
                                </span>
                            </th>
                        ))}
                    </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map((row, rowIndex) => {
                            prepareRow(row)
                            return (
                                <tr key={rowIndex} {...row.getRowProps()} onClick={() => handleRowClick(row.original.id)}>
                                    {row.cells.map((cell, cellIndex) => {
                                        return <td key={cellIndex} {...cell.getCellProps()} className='tableStyle'>{cell.render('Cell')}</td>
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

export default StatisticsTable
