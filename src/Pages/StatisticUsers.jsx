import "./style/StatisticUsers.css"

import { useMemo } from 'react'

import Navibar from "../Components/OftenUsed/Navibar";
import { Container } from 'react-bootstrap';
import ContainerCast from '../Components/OftenUsed/ContainerCast';
import StatisticsTable from "../Components/Statistics/StatisticsTable";

import dataTable from '../Components/Statistics/DataTable.json'
import { ColumnsTableUsers } from '../Components/Statistics/ColumnsTable'

/*статистика пользователей */
const StatisticUsers = () => {
    return (
        <>
            <div>
                <Navibar />

                <Container className="bodyStatictic" >
                    <ContainerCast className='blockStatictic'>
                        <Container className="headStatictic">
                            <h1>Статистика по пользователям</h1>
                        </Container>
                        <Container className="bodyBlockStatictic">
                            <StatisticsTable data={useMemo(() => dataTable)} columns={useMemo(() => ColumnsTableUsers, [])} />
                        </Container>
                    </ContainerCast>
                </Container>
            </div>
        </>
    )
}

export default StatisticUsers
