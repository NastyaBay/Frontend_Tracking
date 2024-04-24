import "./style/StatisticUser.css"
import { useMemo } from 'react'
import { Container } from 'react-bootstrap';
import ContainerCast from '../Components/OftenUsed/ContainerCast';
import Navibar from "../Components/OftenUsed/Navibar";
import TableStatisticUser from "../Components/Statistics/TableStatisticUser";
import dataUserPages from "../Components/Statistics/DataUserPages.json"
import dataTableUser from "../Components/Statistics/DataTableUser.json"
import dataForm from "../Components/Statistics/DataForm.json"

/*статистика пользователя */
const StatisticUser = () => {
    const handleCrossClick = () => {
        if (typeof window !== 'undefined') {
            window.location.href = '/statistic';
        }
    };
    return (
        <>
            <div>
                <Navibar />
                <Container className="bodyStatictic" >
                    <ContainerCast className='blockStatictic'>
                        <Container className="headStatictic">
                            <h1>Статистика по пользователю</h1>
                            <img src="/icons/cross.svg" onClick={handleCrossClick}></img>
                        </Container>
                        <Container className="bodyBlockStatictic blockUser">
                            <Container className="blockBody">
                                <h1>Общая информация</h1>
                                <TableStatisticUser data={useMemo(() => dataTableUser)} />
                            </Container>
                            <Container className="blockBody">
                                <h1>По страницам</h1>
                                <TableStatisticUser data={useMemo(() => dataUserPages)} />
                            </Container>
                            <Container className="blockBody">
                                <h1>По формам обратной связи</h1>
                                <TableStatisticUser data={useMemo(() => dataForm)} />
                            </Container>
                        </Container>
                    </ContainerCast>
                </Container>
            </div>
        </>
    )
}

export default StatisticUser
