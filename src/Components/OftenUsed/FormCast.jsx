import '../style/formCast.css'
import { Form } from "react-bootstrap";

// форма Input
const FormCast = (props) => {
    return (
        <>
            <Form.Control
                type={props.type}
                className={props.className}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                defaultValue={props.defaultValue}
            />
        </>
    )
}

export default FormCast;
