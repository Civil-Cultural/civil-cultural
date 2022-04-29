/* ----------- RESOURCES ----------- */
import { useState, useEffect, useMemo } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useTheme } from "Hooks/useTheme";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/* ----------- COMPONENTS ----------- */
import Head from "next/head";
import Link from "next/link";
import Button from "Components/Button";
import Label from "Components/Label";
import Input from "Components/Input";
import AlertError from "Components/AlertError";
import { Row, Col, Form } from "react-bootstrap";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface CountryProps {
  id: {
    M49: number;
    "ISO-ALPHA-2": string;
    "ISO-ALPHA-3": string;
  };
  nome: string;
  "regiao-intermediaria": object;
  "sub-regiao": object;
}

/* ----------- STYLES ----------- */
import styles from "Pages/register/styles.module.scss";

export default function Register({ locale }) {
  const { theme } = useTheme();
  const [countries, setCountries] = useState<CountryProps[]>([]);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { t } = useTranslation();

  let validators = useMemo(() => {
    return yup.object({
      name: yup
        .string()
        .required(
          t("forms.message_error.required").replace(":FIELD", t("forms.name"))
        )
        .trim(),
      email: yup
        .string()
        .email(t("forms.message_error.email"))
        .required(t("forms.message_error.required").replace(":FIELD", "email"))
        .trim(),
      password: yup
        .string()
        .required(
          t("forms.message_error.required").replace(
            ":FIELD",
            t("forms.password")
          )
        )
        .trim(),
      password_confirmation: yup
        .string()
        .required(
          t("forms.message_error.required").replace(
            ":FIELD",
            t("forms.password_confirmation")
          )
        )
        .oneOf(
          [yup.ref("password")],
          t("forms.message_error.password_confirmation")
        )
        .trim(),
      phone_cell: yup
        .string()
        .required(
          t("forms.message_error.required").replace(
            ":FIELD",
            t("forms.phone_cell")
          )
        )
        .max(11, t("forms.message_error.max").replace(":NUM", "11"))
        .trim(),
      phone_fix_number: yup
        .string()
        .nullable()
        .notRequired()
        .max(8, t("forms.message_error.max").replace(":NUM", "8"))
        .trim(),
      personal_identification: yup
        .string()
        .required(
          t("forms.message_error.required").replace(
            ":FIELD",
            t("forms.personal_identification")
          )
        )
        .trim(),
      country: yup
        .string()
        .required(
          t("forms.message_error.required").replace(
            ":FIELD",
            t("forms.country")
          )
        )
        .trim(),
      cep: yup
        .string()
        .notRequired()
        .max(8, t("forms.message_error.max").replace(":NUM", "8")),
      state: yup
        .string()
        .required(
          t("forms.message_error.required").replace(":FIELD", t("forms.state"))
        )
        .trim(),
      city: yup
        .string()
        .required(
          t("forms.message_error.required").replace(":FIELD", t("forms.city"))
        )
        .trim(),
      address: yup
        .string()
        .required(
          t("forms.message_error.required").replace(
            ":FIELD",
            t("forms.address")
          )
        )
        .trim(),
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(validators) });

  const submit = (data) => console.table(data);

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/paises")
      .then((res) => {
        setCountries(res.data);
      })
      .catch(console.error);
  }, []);

  return (
    <Col
      className={`${styles.containerRegister} ${styles[theme]} row p-0 m-0 col-12 py-3`}
    >
      <Head>
        <title>{t("pages.register.title")} - Civil Cultural</title>
      </Head>

      <Col className="d-none d-xxl-block d-xl-block d-lg-block col-6 h-full" />

      <Col className="col-11 mx-auto mx-lg-0 col-lg-6 col-md-10 col-sm-12">
        <Form className="col-11 mx-auto" onSubmit={handleSubmit(submit)}>
          <Form.Group className="row p-0 m-0 mb-4">
            <Label label={t("forms.name")}>
              <Input
                type="text"
                placeholder={t("forms.name")}
                aria-label={t("forms.name")}
                aria-required="true"
                {...register("name", { required: true })}
              />
            </Label>
            <Col className="col-12 mx-auto mt-2">
              {errors.name && <AlertError text={errors.name.message} />}
            </Col>
          </Form.Group>

          <Form.Group className="row p-0 m-0 mb-4">
            <Label label="Email">
              <Input
                type="email"
                placeholder="Email"
                aria-label="Email"
                aria-required="true"
                {...register("email", { required: true })}
              />
            </Label>
            <Col className="col-12 mx-auto mt-2">
              {errors.email && <AlertError text={errors.email.message} />}
            </Col>
          </Form.Group>

          <Form.Group className="d-md-flex gap-md-2 mb-4">
            <Col className="col-12 col-md-6 mb-4 mb-md-0 position-relative">
              <Label label={t("forms.password")}>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder={t("forms.password")}
                  aria-label={t("forms.password")}
                  aria-required="true"
                  {...register("password", { required: true })}
                />

                <span
                  className={`${styles.boxIcon} cursor-pointer`}
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
                {errors.password && (
                  <AlertError text={errors.password.message} />
                )}
              </Col>
            </Col>

            <Col className="col-12 col-md-6 mb-4 mb-md-0">
              <Label label={t("forms.password_confirmation")}>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder={t("forms.password_confirmation")}
                  aria-label={t("forms.password_confirmation")}
                  aria-required="true"
                  {...register("password_confirmation", { required: true })}
                />
              </Label>
              <Col className="col-12 mx-auto mt-2">
                {errors.password_confirmation && (
                  <AlertError text={errors.password_confirmation.message} />
                )}
              </Col>
            </Col>
          </Form.Group>

          <Form.Group className="d-md-flex gap-md-md-2 mb-4">
            <Col className="col-12 col-md-6 mb-4 mb-md-0">
              <Label label={t("forms.phone_cell")}>
                <Input
                  placeholder={t("forms.phone_cell")}
                  aria-label={t("forms.phone_cell")}
                  aria-required="true"
                  onKeyPress={(e) => /[\d]+/.test(e.key) || e.preventDefault()}
                  {...register("phone_cell", { required: true, max: 11 })}
                />
              </Label>
              <Col className="col-12 mx-auto mt-2">
                {errors.phone_cell && (
                  <AlertError text={errors.phone_cell.message} />
                )}
              </Col>
            </Col>

            <Col className="col-12 col-md-6 mb-4 mb-md-0">
              <Label label={t("forms.landline")}>
                <Input
                  placeholder={t("forms.landline")}
                  aria-label={t("forms.landline")}
                  aria-required="false"
                  onKeyPress={(e) => /[\d]+/.test(e.key) || e.preventDefault()}
                  {...register("phone_fix_number", {
                    required: false,
                    max: 8,
                  })}
                />
              </Label>
              <Col className="col-12 mx-auto mt-2">
                {errors.phone_fix_number && (
                  <AlertError text={errors.phone_fix_number.message} />
                )}
              </Col>
            </Col>
          </Form.Group>

          <Form.Group className="row p-0 m-0 mb-4">
            <Label label={t("forms.personal_identification")}>
              <Input
                placeholder={t("forms.personal_identification")}
                aria-label={t("forms.personal_identification")}
                aria-required="true"
                {...register("personal_identification", { required: true })}
              />
            </Label>
            <Col className="col-12 mx-auto mt-2">
              {errors.personal_identification && (
                <AlertError text={errors.personal_identification.message} />
              )}
            </Col>
          </Form.Group>

          <Form.Group className="row p-0 m-0 mb-4">
            <Label label={t("forms.country")}>
              <Form.Select
                placeholder={t("forms.country")}
                aria-label={t("forms.country")}
                aria-required="true"
                className={`${styles.formSelect} ${styles[theme]} py-1`}
                {...register("country", { required: true })}
                defaultValue="none"
              >
                <option value="none" disabled selected></option>
                {countries.map((country) => (
                  <option
                    key={country.id["ISO-ALPHA-2"]}
                    value={country.id["ISO-ALPHA-2"]}
                  >
                    {country.nome}
                  </option>
                ))}
              </Form.Select>
            </Label>
            <Col className="col-12 mx-auto mt-2">
              {errors.country && <AlertError text={errors.country.message} />}
            </Col>
          </Form.Group>

          <Form.Group className="row p-0 m-0 mb-4">
            <Label label={t("forms.state")}>
              <Input
                type="text"
                placeholder={t("forms.state")}
                aria-label={t("forms.state")}
                aria-required="true"
                {...register("state", { required: true })}
              />
            </Label>
            <Col className="col-12 mx-auto mt-2">
              {errors.state && <AlertError text={errors.state.message} />}
            </Col>
          </Form.Group>

          <Form.Group className="row p-0 m-0 mb-4">
            <Label label="Cep">
              <Input
                type="text"
                placeholder="Cep"
                aria-label="Cep"
                aria-required="false"
                onKeyPress={(e) => /[\d]+/.test(e.key) || e.preventDefault()}
                {...register("cep", {
                  required: false,
                  max: 8,
                  pattern: /^[0-9]{8}$/,
                })}
              />
            </Label>
            <Col className="col-12 mx-auto mt-2">
              {errors.cep && <AlertError text={errors.cep.message} />}
            </Col>
          </Form.Group>

          <Form.Group className="row p-0 m-0 mb-4">
            <Label label={t("forms.city")}>
              <Input
                type="text"
                placeholder={t("forms.city")}
                aria-label={t("forms.city")}
                aria-required="true"
                {...register("city", { required: true })}
              />
            </Label>
            <Col className="col-12 mx-auto mt-2">
              {errors.city && <AlertError text={errors.city.message} />}
            </Col>
          </Form.Group>

          <Form.Group className="row p-0 m-0 mb-4">
            <Label label={t("forms.address")}>
              <Input
                type="text"
                placeholder={t("forms.address")}
                aria-label={t("forms.address")}
                aria-required="true"
                {...register("address", { required: true })}
              />
            </Label>
            <Col className="col-12 mx-auto mt-2">
              {errors.address && <AlertError text={errors.address.message} />}
            </Col>
          </Form.Group>

          <Form.Group className="mx-auto d-grid gap-1 mb-4">
            <Button type="button" className="text-uppercase">
              {" "}
              Cadastrar{" "}
            </Button>
          </Form.Group>
        </Form>

        <Col className="col-12 mt-2 text-center">
          <Link href="/login">
            <a className={`${styles.formLink} link-primary`}>
              {t("pages.register.link_login")}
            </a>
          </Link>
        </Col>
      </Col>
    </Col>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
