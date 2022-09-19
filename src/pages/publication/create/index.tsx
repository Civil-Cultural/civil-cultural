/* ----------- RESOURCES ----------- */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Layout } from "Utils/Layout";

/* ----------- RESOURCES ----------- */
import MainLayout from "Layouts/MainLayout";
import Label from "Components/Label";
import Input from "Components/Input";
import { Col, Form } from "react-bootstrap";

/* ----------- STYLES ----------- */
import styles from "pages/publication/create/styles.module.scss";

function CreatePublication() {
    return (
        <Col className="col-12">
            <Col className={`${styles.container_form} col-11 mx-auto col-lg-8 border-none border-lg-2`}>
                <Form>
                    <Form.Group className="col-11 mx-auto col-lg-6 mb-4">
                        <Label label="Título" className={styles.label}>
                            <Input type="text" placeholder="Título" />
                        </Label>
                    </Form.Group>

                    <Form.Group className="col-11 mx-auto col-lg-6 mb-4">
                        <Label label="Descrição" className={styles.label}>
                            <Input type="text" placeholder="Descrição" />
                        </Label>
                    </Form.Group>

                    <Form.Group className="col-11 mx-auto col-lg-6"></Form.Group>
                </Form>
            </Col>
        </Col>
    );
}

export default Layout(CreatePublication, MainLayout, {
    title: "Create Publication",
});
