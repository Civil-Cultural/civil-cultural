/* ----------- RESOURCES ----------- */
import { useMemo, useState } from 'react'
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/* ----------- HOOKS ----------- */
import { useTheme } from "Hooks/useTheme";

/* ----------- OTHERS ----------- */
import { withI18n } from 'Utils/withI18n';

/* ----------- ICONS ----------- */
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

/* ----------- COMPONENTS ----------- */
import Head from "next/head";
import Button from "Components/Button";
import Input from "Components/Input";
import Logo from "Components/Logo";
import Label from "Components/Label";
import AlertError from "Components/AlertError";
import { Col, Form } from "react-bootstrap";

/* ----------- STYLES ----------- */
import styles from "Pages/reset-password/styles.module.scss";

export default function NewPassword() {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const [showPassword, setShowPassword] = useState(false);

    let validators = useMemo(() => {
        return yup.object({
            password: yup
                .string()
                .required(t("forms.message_error.required").replace(":FIELD", t("forms.password")))
                .trim(),
            password_confirmation: yup
                .string()
                .required(t("forms.message_error.required").replace(":FIELD", t("forms.password_confirmation")))
                .oneOf([yup.ref("password")], t("forms.message_error.password_confirmation"))
                .trim(),
        });
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange", resolver: yupResolver(validators) });

    function changePassword(data) {
        console.log(data);
    }

    return (
        <div className={`d-flex ${styles.body} ${styles[theme]}`}>
            <Head>
                <title>{t("pages.reset_password.title")} | Civil Cultural</title>
            </Head>

            <Col className={`${styles.img_container}  col-6 d-none d-md-block p-0`} />

            <Col
                as="section"
                className={`col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-items-center align-items-center`}
            >
                <Col className="col-11 mx-auto">
                    <Col className="col-10 col-xxl-5 col-xl-5 col-lg-6 col-md-7 col-sm-8 mx-auto d-flex align-items-center mb-5">
                        <h4 className={` ${styles.logo_title}  ${styles[theme]} text-capitalize ms-2`}>
                            Civil Cultural
                        </h4>
                        <Logo />
                    </Col>

                    <Form onSubmit={handleSubmit(changePassword)}>
                        <Form.Group className="col-12 col-lg-8 col-md-10 col-sm-12 mx-auto mb-4 position-relative">
                            <p className={`${styles.instruction} ${styles[theme]}`}>
                                {t("pages.reset_password.message_info")}
                            </p>
                            
                            <Label label={t("forms.password")}>
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    className={`${styles.password_input} ${styles[theme]}`}
                                    placeholder={t("forms.password")}
                                    aria-label={t("forms.password")}
                                    aria-required="true"
                                    {...register("password", { required: true })}
                                />

                                <span
                                    className={`${styles.eye_btn_container} cursor-pointer`}
                                    onClick={() => setShowPassword((x) => !x)}
                                >
                                    {showPassword ? (
                                        <AiFillEyeInvisible className={styles.iconEyeInvisible} />
                                    ) : (
                                        <AiFillEye className={styles.iconEye} />
                                    )}
                                </span>
                            </Label>

                            <Col className="col-12 mx-auto mt-2">
                                {errors.password && <AlertError text={errors.password.message as string} />}
                            </Col>
                        </Form.Group>

                        <Form.Group className="col-12 col-lg-8 col-md-10 col-sm-12 mx-auto mb-5">
                            <Label label={t("forms.password_confirmation")}>
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder={t("forms.password_confirmation")}
                                    aria-label={t("forms.password_confirmation")}
                                    aria-required="true"
                                    className={styles.password_input}
                                    {...register("password_confirmation", { required: true })}
                                />
                            </Label>

                            <Col className="col-12 mx-auto mt-2">
                                {errors.password_confirmation && (
                                    <AlertError text={errors.password_confirmation.message as string} />
                                )}
                            </Col>
                        </Form.Group>

                        <Form.Group className="col-12 col-lg-8 col-md-10 col-sm-12 mx-auto">
                            <Col className="col-12 d-grid">
                                <Button type="submit">Redefinir </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Col>
        </div>
    );
}

export const getStaticProps: GetStaticProps = withI18n()