import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const ChartsLine = (props) => {
    const labels1 = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const labels = ['01.03', '02.03', '03.03', '04.03', '05.03', '06.03'];

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Просмотры',
                data: props.dataViews,
                borderColor: '#FF4B4B',
                backgroundColor: '#FF4B4B',
                fill: false,
            },
            {
                label: 'Посещения',
                data: props.dataVisits,
                borderColor: '#8EB4FF',
                backgroundColor: '#8EB4FF',
                fill: false,
            },
            {
                label: 'Уникальные посетители',
                data: props.dataUniq,
                borderColor: '#42FF00',
                backgroundColor: '#42FF00',
                fill: false,
            },
        ],
    };

    const data2 = {
        labels: labels,
        datasets: [
            {
                label: 'Общее',
                data: props.dataAll,
                borderColor: '#FF4B4B',
                backgroundColor: '#FF4B4B',
                fill: false,
            },
            {
                label: '1 ссылка',
                data: props.data1,
                borderColor: '#8EB4FF',
                backgroundColor: '#8EB4FF',
                fill: false,
            },
            {
                label: '2 ссылка',
                data: props.data2,
                borderColor: '#42FF00',
                backgroundColor: '#42FF00',
                fill: false,
            },
            {
                label: '3 ссылка',
                data: props.data3,
                borderColor: '#8EB4FF',
                backgroundColor: '#8EB4FF',
                fill: false,
            },
            {
                label: '4 ссылка',
                data: props.data4,
                borderColor: '#42FF00',
                backgroundColor: '#42FF00',
                fill: false,
            },
        ],
    };
    ChartJS.defaults.plugins.legend.position = "bottom";
    return (
        <>
            <Line data={props.isData ? data : data2} />
        </>
    )
}

export default ChartsLine
