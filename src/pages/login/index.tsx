/* ----------- RESOURCES ----------- */
import { useTheme } from 'Hooks/useTheme'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRive, useStateMachineInput } from 'rive-react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form";
import * as yup from "yup";

/* ----------- COMPONENTS ----------- */
import Head from "next/head";
import Logo from "Components/Logo";
import Link from "next/link";
import Button from "Components/Button";
import Label from "Components/Label";
import Input from "Components/Input";
import AlertError from "Components/AlertError";
import { Col, Form } from "react-bootstrap";

/* ----------- STYLES ----------- */
import styles from "Pages/login/styles.module.scss";

export default function Login() {
    let schema;
    const { theme } = useTheme();
    const { t } = useTranslation();

    if (!schema) {
        schema = yup.object({
            user: yup
                .string()
                .required(t("forms.message_error.required").replace(":FIELD", t("pages.login.nick_or_email")))
                .trim(),
            password: yup
                .string()
                .required(t("forms.message_error.required").replace(":FIELD", t("forms.password")))
                .trim(),
        });
    }

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

    const STATE_MACHINE_NAME = "State Machine 1";
    const STATE_MACHINE_CHECKING = "Checking";
    const STATE_MACHINE_VALID = "Success";
    const STATE_MACHINE_INVALID = "Fail";

    const { RiveComponent, rive } = useRive({
        src: "scientist-login.riv",
        stateMachines: STATE_MACHINE_NAME,
        autoplay: true,
        onLoadError(err) {},
    });

    const checking = useStateMachineInput(rive, STATE_MACHINE_NAME, STATE_MACHINE_CHECKING);
    const success = useStateMachineInput(rive, STATE_MACHINE_NAME, STATE_MACHINE_VALID);
    const fail = useStateMachineInput(rive, STATE_MACHINE_NAME, STATE_MACHINE_INVALID);

    const illustrationValidate = (e) =>
        e.target?.value.length > 0 ? checking && checking.fire() : fail && fail.fire();

    function submit(data) {
        success && success.fire();
        console.log(data);
    }

    return (
        <Col className={`${styles.container_login} ${styles[theme]} col-12 p-0 m-0 row h-full`}>
            <Head>
                <title>Login</title>
            </Head>

            <Col className={`${styles.img_illustration} col-6 d-none d-md-block p-0`}>
                <RiveComponent style={{ width: "100%", height: "100%", marginLeft: "-.5rem" }} />
            </Col>

            <Col className="col-12 col-md-6 col-sm-12 d-flex justify-items-center align-items-center">
                <Col className="col-11 mx-auto">
                    <Col className="col-10 col-xxl-5 col-xl-5 col-lg-6 col-md-7 col-sm-8 mx-auto d-flex align-items-center mb-5">
                        <h4 className={`${styles.logo_title} ${styles[theme]} text-capitalize ms-2`}>
                            Civil Cultural
                        </h4>
                        <Logo />
                    </Col>

                    <Form>
                        <Form.Group className="col-12 col-lg-8 col-md-10 col-sm-12 mx-auto mb-4">
                            <Label className={`${styles[theme]}`} label={t("pages.login.nick_or_email")}>
                                <Input
                                    type="text"
                                    placeholder={t("pages.login.nick_or_email")}
                                    aria-label={t("pages.login.nick_or_email")}
                                    aria-required="true"
                                    {...register("userOrEmail", { required: true })}
                                    onKeyUp={illustrationValidate}
                                />
                            </Label>
                            <Col className="col-12 mx-auto mt-2">
                                {errors.user && <AlertError text={errors.user.message as string} />}
                            </Col>
                        </Form.Group>

                        <Form.Group className="col-12 col-lg-8 col-md-10 col-sm-12 mx-auto mb-4">
                            <Label
                                className={`${styles.float_label} ${styles[theme]}`}
                                label={t("forms.password")}
                            >
                                <Input
                                    type="password"
                                    placeholder={t("forms.password")}
                                    aria-label={t("forms.password")}
                                    aria-required="true"
                                    {...register("password", { required: true })}
                                    onKeyUp={illustrationValidate}
                                />
                            </Label>
                            <Col className="col-12 mx-auto mt-2">
                                {errors.password && <AlertError text={errors.password.message as string} />}
                            </Col>
                        </Form.Group>

                        <Form.Group className="col-12 col-lg-8 col-md-10 col-sm-12 mx-auto pt-2 pb-3 mt-5 mb-4">
                            <Link href="/forgot-password">
                                <a className={`${styles.form_link} link-primary float-end`}>
                                    {t("pages.login.forgot_password")}
                                </a>
                            </Link>
                        </Form.Group>

                        <Form.Group className="col-12 col-lg-8 col-md-10 col-sm-12 mx-auto d-grid gap-2 mb-4">
                            <Button type="button" className="text-uppercase" onClick={handleSubmit(submit)}>
                                {" "}
                                Entrar{" "}
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Col>
        </Col>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common']))
        }
    }
}