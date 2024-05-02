import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from './Pages/Account';
import Login from './Pages/Login';
import Form from './Pages/Form';
import Answer from './Pages/Answer';
import Page from './Pages/Page';
import StatisticPage from './Pages/StatisticPage';
import StatisticUsers from './Pages/StatisticUsers';
import StatisticUser from './Pages/StatisticUser';


const App = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/account" element={<Account />} />
                <Route exact path="/form" element={<Form />} />
                <Route exact path="/form/answer" element={<Answer />} />
                <Route path="/page/:pageUrl" element={<Page />} />
                <Route path="/page/:pageUrl/statistic" element={<StatisticPage />} />
                <Route exact path="/statistic" element={<StatisticUsers />} />
                <Route exact path="/statistic/user" element={<StatisticUser />} />
            </Routes>
        </Router>
        </>
    )
}

export default App
