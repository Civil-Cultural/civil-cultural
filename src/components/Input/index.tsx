/* ----------- RESOURCES ----------- */
import { forwardRef, Ref, useContext } from 'react'
/* ----------- HOOKS ----------- */
import { useTheme } from "Context/ThemeContext";

/* ----------- CONTRACTS ----------- */
import { FormControlProps } from 'react-bootstrap'

/* ----------- COMPONENTS ----------- */
import Form from 'react-bootstrap/Form'

/* ----------- STYLES ----------- */
import styles from 'Components/Input/styles.module.scss'

function Input(
    {
        className,
        ...props
    }: FormControlProps,
    ref?: Ref<any>
) {
    const { theme } = useTheme()

    return (
        <Form.Control className={`${styles.inputCustomized} ${styles[theme]} ${className}`} ref={ref} {...props} />
    )
}

export default forwardRef(Input)