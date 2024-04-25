import { useState } from "react"
import { Button } from "react-bootstrap"


const ButtonsFilterDate = () => {
    const [activeBtn, setActiveBtn] = useState('day')

    const handleActiveBtn = (type) => {
        setActiveBtn(type);
    }
    return (
        <>
            <div className="blockBtnDate"> 
                <Button className={`btnFilterDate ${activeBtn === 'day' ? 'activeBtn' : ''}`}
                    onClick={() => handleActiveBtn('day')}>
                    По дням
                </Button>
                <Button className={`btnFilterDate ${activeBtn === 'month' ? 'activeBtn' : ''}`}
                    onClick={() => handleActiveBtn('month')}>
                    По месяцам
                </Button>
                <Button className={`btnFilterDate ${activeBtn === 'year' ? 'activeBtn' : ''}`}
                    onClick={() => handleActiveBtn('year')}>
                    По годам
                </Button>
            </div>
        </>
    )
}

export default ButtonsFilterDate
