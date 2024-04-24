import { Container } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const AnswerCheckboxRadio = (props) => {
    const options = {
        indexAxis: 'y',
        barPercentage: 0.8
    }

    const data = {
        labels: props.labels,
        datasets: [
            {
                axis: 'y',
                data: props.data,
                borderColor: '#8EB4FF',
                backgroundColor: '#8EB4FF',
                Width: 10,
                fill: false,
            },
        ],
    };
    ChartJS.defaults.plugins.legend.display = false;

    return (
        <>
            <Container className='borderFormAnswer'>
                <h1 className="h1-answer">{props.question}</h1>
                <Container className="bar-height">
                    <Bar data={data} options={options} />
                </Container>
            </Container>
        </>
    )
}

export default AnswerCheckboxRadio
