import "./style/StatisticPage.css"
import ContainerCast from '../Components/OftenUsed/ContainerCast';
import Navibar from "../Components/OftenUsed/Navibar";
import { Container } from 'react-bootstrap';
import ButtonsFilterDate from "../Components/Statistics/ButtonsFilterDate";
import ChartsLine from "../Components/Statistics/ChartsLine";
import StatisticsTable from "../Components/Statistics/StatisticsTable";

import dataTable from '../Components/Statistics/DataTable.json'
import { ColumnsTablePage, ColumnsTableUrls } from '../Components/Statistics/ColumnsTable'

import { useMemo, useEffect } from 'react'

import { authUser } from '../Components/Account/backend/LoginBack';
import { useNavigate, useParams } from 'react-router-dom';
/*Статистика страницы */
const StatisticPage = () => {
    const navigate = useNavigate();
    const pageUrl = useParams();

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
    
    const saveNewForm = async () => {
        console.log('save');
    }

    return (
        <>
            <div>
                <Navibar  activ2={'activ'} name1='Конструктор' name2='Статистика' href1={`/page/${pageUrl.pageUrl}`} savePage={saveNewForm}/>

                <Container className="bodyStaticticPage">
                    <ContainerCast className='blockStaticticPage'>
                        <Container className="headStaticticPage">
                            <h1>Статистика по странице: Тест драйв</h1>
                        </Container>
                        <Container className="bodyBlockStaticticPage">
                            <ButtonsFilterDate />

                            <Container className="blockChart">
                                <StatisticsTable data={useMemo(() => dataTable)} columns={useMemo(() => ColumnsTablePage, [])} />
                                <ChartsLine isData={true} dataViews={[20, 16, 22, 18, 10, 6]} dataVisits={[12, 11, 16, 7, 6, 2]} dataUniq={[1, 0, 3, 1, 0, 0]} />
                                <StatisticsTable data={useMemo(() => dataTable)} columns={useMemo(() => ColumnsTableUrls, [])} />
                                <ChartsLine dataAll={[15, 10, 6, 7, 14, 20]} data1={[8, 2, 4, 5, 0, 10]} data2={[3, 0, 3, 1, 0, 0]} data3={[1, 2, 1, 2, 4, 2]} data4={[3, 0, 0, 0, 0, 0]} />
                            </Container>
                        </Container>
                    </ContainerCast>
                </Container>
            </div>
        </>
    )
}

export default StatisticPage
