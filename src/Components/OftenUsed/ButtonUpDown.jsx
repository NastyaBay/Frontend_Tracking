import '../style/buttonUpDown.css'
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap'

const ButtonUpDown = ({ moveBlockUp, moveBlockDown }) => {
    return (
        <>
            <ToggleButtonGroup type="checkbox" className='btns'>
                <ToggleButton className='btnUpDown' onClick={moveBlockUp}>
                    <img className='iconsUpDown' src='/icons/up.svg'></img>
                </ToggleButton>
                <ToggleButton className='btnUpDown' onClick={moveBlockDown}>
                    <img className='iconsUpDown' src='/icons/down.svg'></img>
                </ToggleButton>
            </ToggleButtonGroup>
        </>
    )
}

export default ButtonUpDown
