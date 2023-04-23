/* ----------- RESOURCES ----------- */
import { useState } from "react";
import { useTranslation } from "next-i18next";

/* ----------- HOOKS ----------- */
import { useTheme } from "Context/ThemeContext";

/* ----------- UTILS ----------- */
import { withI18n } from "Utils/withI18n";

/* ----------- COMPONENTS ----------- */
import { FloatingLabel } from "react-bootstrap";
import { Layout } from "utils/Layout";
import MainLayout from "Layouts/MainLayout";
import Input from "Components/Input";
import Button from "Components/Button";

/* ----------- ICONS ----------- */
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

/* ----------- STYLES ----------- */
import styles from "Pages/profile/styles.module.scss";
import { GetStaticProps } from "next";

function Profile() {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const formsEditable = Array(4).fill(true);

  const [showPassword, setShowPassword] = useState(false);
  const [isDisabled, setIsDisabled] = useState<boolean[]>(formsEditable);

  function handlerEditForm(index: number) {
    const newFormsEditable = isDisabled.map((edit, i) =>
      i === index ? !edit : edit
    );

    setIsDisabled(newFormsEditable);
  }

  return (
    <div className={`${styles.container_profile} ${styles[theme]}`}>
      <div className={`d-flex justify-content-center`}>
        <section
          className={`col-11 col-lg-8 col-md-10 border border-secondary rounded-3 ${styles.section} ${styles[theme]}`}
        >
          <div
            className={`d-flex justify-content-between ${styles.section_header} ${styles[theme]}`}
          >
            <h2 className={`${styles.section_title}`}>
              {t("pages.profile.personal_information")}
            </h2>

            <Button
              type="button"
              className={`${styles.edit_btn}`}
              onClick={() => handlerEditForm(0)}
            >
              {t("pages.profile.edit")}
            </Button>
          </div>

          <div
            className={`col-12 col-lg-10 ${styles.input_container} ${styles[theme]}`}
          >
            <FloatingLabel
              label={t("forms.name")}
              className={`col-lg-10 col-12 ${styles.label} ${styles[theme]}`}
            >
              <Input
                placeholder={t("forms.name")}
                aria-label={t("forms.name")}
                className={`${styles.input}`}
                aria-disabled="false"
                disabled={isDisabled[0]}
              />
            </FloatingLabel>
          </div>

          <div
            className={`col-12 col-lg-10 ${styles.input_container} ${styles[theme]}`}
          >
            <FloatingLabel
              label={t("forms.personal_identification")}
              className={`col-lg-10 col-12 ${styles.label} ${styles[theme]}`}
            >
              <Input
                placeholder={t("forms.personal_identification")}
                aria-label={t("forms.personal_identification")}
                className={`${styles.input}`}
                aria-disabled="false"
                disabled={isDisabled[0]}
              />
            </FloatingLabel>
          </div>
        </section>
      </div>

      <div className={`d-flex justify-content-center`}>
        <section
          className={`col-11 col-lg-8 col-md-10 border border-secondary rounded-3 ${styles.section} ${styles[theme]}`}
        >
          <div
            className={`d-flex justify-content-between ${styles.section_header} ${styles[theme]}`}
          >
            <h2 className={`${styles.section_title}`}>
              {t("pages.profile.localization")}
            </h2>

            <Button
              type="button"
              className={`${styles.edit_btn}`}
              onClick={() => handlerEditForm(1)}
            >
              {t("pages.profile.edit")}
            </Button>
          </div>

          <div
            className={`col-12 col-lg-10 ${styles.input_container} ${styles[theme]}`}
          >
            <FloatingLabel
              label={t("forms.country")}
              className={`col-lg-10 col-12 ${styles.label} ${styles[theme]}`}
            >
              <Input
                placeholder={t("forms.country")}
                aria-label={t("forms.country")}
                className={`${styles.input}`}
                aria-disabled="false"
                disabled={isDisabled[1]}
              />
            </FloatingLabel>
          </div>

          <div
            className={`col-12 col-lg-10 ${styles.input_container} ${styles[theme]}`}
          >
            <FloatingLabel
              label={t("forms.state")}
              className={`col-lg-10 col-12 ${styles.label} ${styles[theme]}`}
            >
              <Input
                placeholder={t("forms.state")}
                aria-label={t("forms.state")}
                className={`${styles.input}`}
                aria-disabled="false"
                disabled={isDisabled[1]}
              />
            </FloatingLabel>
          </div>

          <div
            className={`col-12 col-lg-10 ${styles.input_container} ${styles[theme]}`}
          >
            <FloatingLabel
              label={t("forms.city")}
              className={`col-lg-10 col-12 ${styles.label} ${styles[theme]}`}
            >
              <Input
                placeholder={t("forms.city")}
                aria-label={t("forms.city")}
                className={`${styles.input}`}
                aria-disabled="false"
                disabled={isDisabled[1]}
              />
            </FloatingLabel>
          </div>

          <div
            className={`col-12 col-lg-10 ${styles.input_container} ${styles[theme]}`}
          >
            <FloatingLabel
              label={t("forms.address")}
              className={`col-lg-10 col-12 ${styles.label} ${styles[theme]}`}
            >
              <Input
                placeholder={t("forms.address")}
                aria-label={t("forms.address")}
                className={`${styles.input}`}
                aria-disabled="false"
                disabled={isDisabled[1]}
              />
            </FloatingLabel>
          </div>

          <div
            className={`col-12 col-lg-10 ${styles.input_container} ${styles[theme]}`}
          >
            <FloatingLabel
              label="CEP"
              className={`col-lg-10 col-12 ${styles.label} ${styles[theme]}`}
            >
              <Input
                placeholder="CEP"
                aria-label="CEP"
                className={`${styles.input}`}
                aria-disabled="false"
                disabled={isDisabled[1]}
              />
            </FloatingLabel>
          </div>
        </section>
      </div>

      <div className={`d-flex justify-content-center`}>
        <section
          className={`col-11 col-lg-8 col-md-10 border border-secondary rounded-3 ${styles.section} ${styles[theme]}`}
        >
          <div
            className={`d-flex justify-content-between ${styles.section_header} ${styles[theme]}`}
          >
            <h2 className={`${styles.section_title}`}>
              {t("pages.profile.contacts")}
            </h2>

            <Button
              type="button"
              className={`${styles.edit_btn}`}
              onClick={() => handlerEditForm(2)}
            >
              {t("pages.profile.edit")}
            </Button>
          </div>

          <div
            className={`col-12 col-lg-10 ${styles.input_container} ${styles[theme]}`}
          >
            <FloatingLabel
              label={t("forms.landline")}
              className={`col-lg-10 col-12 ${styles.label} ${styles[theme]}`}
            >
              <Input
                placeholder={t("forms.landline")}
                aria-label={t("forms.landline")}
                className={`${styles.input}`}
                aria-disabled="false"
                disabled={isDisabled[2]}
              />
            </FloatingLabel>
          </div>

          <div
            className={`col-12 col-lg-10 ${styles.input_container} ${styles[theme]}`}
          >
            <FloatingLabel
              label={t("forms.phone_cell")}
              className={`col-lg-10 col-12 ${styles.label} ${styles[theme]}`}
            >
              <Input
                placeholder={t("forms.phone_cell")}
                aria-label={t("forms.phone_cell")}
                className={`${styles.input}`}
                aria-disabled="false"
                disabled={isDisabled[2]}
              />
            </FloatingLabel>
          </div>
        </section>
      </div>

      <div className={`d-flex justify-content-center`}>
        <section
          className={`col-11 col-lg-8 col-md-10 border border-secondary rounded-3 ${styles.section} ${styles[theme]}`}
        >
          <div
            className={`d-flex justify-content-between ${styles.section_header} ${styles[theme]}`}
          >
            <h2 className={`${styles.section_title}`}>
              {t("pages.profile.account")}
            </h2>

            <Button
              type="button"
              className={`${styles.edit_btn}`}
              onClick={() => handlerEditForm(3)}
            >
              {t("pages.profile.edit")}
            </Button>
          </div>

          <div
            className={`col-12 col-lg-10 ${styles.input_container} ${styles[theme]}`}
          >
            <FloatingLabel
              label="E-mail"
              className={`col-lg-10 col-12 ${styles.label} ${styles[theme]}`}
            >
              <Input
                placeholder="E-mail"
                aria-label="E-mail"
                className={`${styles.input}`}
                aria-disabled="false"
                disabled={isDisabled[3]}
              />
            </FloatingLabel>
          </div>

          <div
            className={`col-12 col-lg-10 ${styles.input_container} ${styles[theme]}`}
          >
            <FloatingLabel
              label={t("forms.password")}
              className={`col-lg-10 col-12 ${styles.label} ${styles[theme]}`}
            >
              <Input
                className={`${styles.input}`}
                type={showPassword ? "text" : "password"}
                placeholder={t("forms.password")}
                aria-label={t("forms.password")}
                aria-disabled="false"
                disabled={isDisabled[3]}
              />

              {!isDisabled[3] && (
                <span
                  className={styles.eye_btn}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                </span>
              )}
            </FloatingLabel>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Layout(Profile, MainLayout, {
    title: "Profile",
});

export const getStaticProps: GetStaticProps = withI18n()
