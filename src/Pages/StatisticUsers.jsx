import "./style/StatisticUsers.css"

import { useMemo, useEffect } from 'react'

import Navibar from "../Components/OftenUsed/Navibar";
import { Container } from 'react-bootstrap';
import ContainerCast from '../Components/OftenUsed/ContainerCast';
import StatisticsTable from "../Components/Statistics/StatisticsTable";

import dataTable from '../Components/Statistics/DataTable.json'
import { ColumnsTableUsers } from '../Components/Statistics/ColumnsTable'

import { authUser } from '../Components/Account/backend/LoginBack';
import { useNavigate } from 'react-router-dom';

/*статистика пользователей */
const StatisticUsers = () => {
    const navigate = useNavigate();

    useEffect(() => {
        authenticated()
    }, [])

    const authenticated = async () => {
        try {
            const response = await authUser()
            if (!response) {
                navigate("/")
            }
        } catch (error) {
            console.error(error);
        }
    }

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
