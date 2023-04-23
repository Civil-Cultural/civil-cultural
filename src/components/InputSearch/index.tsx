/* ----------- RESOURCES ----------- */
import { useState, useRef, forwardRef, Ref, HTMLAttributes } from 'react'

/* ----------- HOOKS ----------- */
import { useTheme } from "Context/ThemeContext";

/* ----------- COMPONENTS ----------- */
import { IoMdClose, IoMdSearch } from "react-icons/io";
import { InputGroup, FormControl, Button } from "react-bootstrap";

/* ----------- STYLES ----------- */
import styles from "Components/InputSearch/styles.module.scss";

function InputSearch({ className, ...props }: HTMLAttributes<HTMLDivElement>, ref: Ref<any>) {
    const { theme } = useTheme();
    const [text, setText] = useState("");

    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
        <>
            <div
                className={`${styles.search_container} ${className} col-11 col-xxl-5 col-xl-5 col-lg-5 col-md-8`}
                ref={ref}
                {...props}
            >
                <InputGroup className="p-0 rounded">
                    <FormControl
                        className={`${styles.search} ${styles[theme]} remove-focus`}
                        placeholder="Pesquise aqui"
                        aria-label="Pesquise aqui"
                        aria-describedby="input para pesquisa de artigos e notícias"
                        onChange={(event) => setText(event.target.value)}
                        value={text}
                    />

                    <InputGroup.Text className={`${styles.input_group_text} ${styles[theme]}`}>
                        <div className={`${styles.box_icon} col-1 offset-1 p-0 m-0`}>
                            <Button
                                className={`${styles.button_clear} ${
                                    text.length == 0 ? "d-none" : ""
                                } remove-focus border-0`}
                                title="Limpar pesquisa"
                                onClick={(_) => setText("")}
                                aria-hidden="true"
                            >
                                <IoMdClose className={`${styles.icon_clear} ${styles[theme]}`} />
                            </Button>
                        </div>
                    </InputGroup.Text>

                    <InputGroup.Text className={`${styles.input_group_text} ${styles[theme]}`}>
                        <div className={`${styles.box_icon} col-3 p-0 m-0`}>
                            <Button
                                className={`${styles.button_search} remove-focus`}
                                ref={buttonRef}
                                title="Click para pesquisar"
                            >
                                <IoMdSearch className={styles.icon_search} />
                            </Button>
                        </div>
                    </InputGroup.Text>
                </InputGroup>
            </div>
        </>
    );
}


export default forwardRef(InputSearch)