/* ----------- RESOURCES ----------- */
import { useTheme } from 'Hooks/useTheme'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { FloatingLabel } from 'react-bootstrap'

/* ----------- COMPONENTS ----------- */
import { Layout } from 'utils/Layout'
import MainLayout from 'Layouts/MainLayout'
import Input from 'Components/Input'
import Button from 'Components/Button'

/* ----------- ICONS ----------- */
import { MdLocationPin } from 'react-icons/md';

/* ----------- STYLES ----------- */
import styles from 'Pages/profile/styles.module.scss'

function Profile() {
  const { theme } = useTheme()
  const { t } = useTranslation();

  return (
    <div className={`${styles.body} ${styles[theme]}`}>
      <div className={`d-flex justify-content-center`}>
        <div className={`col-12 col-lg-10 ${styles.header}`}>
          <h1 className={`${styles.page_title}`}>Profile</h1>
        </div>
      </div>
      <div className={`d-flex justify-content-center`}>
        <section className={`col-12 col-lg-10 border border-secondary rounded-3 ${styles.section} ${styles[theme]}`}>
              <div className={`d-flex justify-content-between ${styles.section_header} ${styles[theme]}`}>
                <h2 className={`${styles.section_title}`}>{t("pages.profile.contacts")}</h2>
                <Button type='button' className={`${styles.edit_btn}`} >
                  EDITAR
                </Button>
              </div>
              <div className={`${styles.input_container} ${styles[theme]}`}>
                <FloatingLabel 
                label={t('forms.name')}
                className={`col-lg-10 col-12 ${styles.label} ${styles[theme]}`}>
                    <Input
                    placeholder={t('forms.name')}
                    aria-label={t('forms.name')}
                    className={`${styles.input}`}
                    />
                  </FloatingLabel>
              </div>
              <div className={`${styles.input_container} ${styles[theme]}`}>
                <FloatingLabel 
                label={t('forms.personal_identification')}
                className={`col-lg-10 col-12 ${styles.label} ${styles[theme]}`}>
                    <Input
                    placeholder={t('forms.personal_identification')}
                    aria-label={t('forms.personal_identification')}
                    className={`${styles.input}`}
                    />
                  </FloatingLabel>
              </div>
        </section>
      </div>
      <div className={`d-flex justify-content-center`}>
        <section className={`col-12 col-lg-10 border border-secondary rounded-3 ${styles.section} ${styles[theme]}`}>
              <div className={`d-flex justify-content-between ${styles.section_header} ${styles[theme]}`}>
                <h2 className={`${styles.section_title}`}>Localizaçao</h2>
                <Button type='button' className={`${styles.edit_btn}`}>
                  EDITAR
                </Button>
              </div>
              <div className={`${styles.input_container} ${styles[theme]}`}>
                <FloatingLabel 
                label={t('forms.country')}
                className={`col-lg-10 col-12 ${styles.label} ${styles[theme]}`}>
                    <Input
                    placeholder={t('forms.country')}
                    aria-label={t('forms.country')}
                    className={`${styles.input}`}
                    />
                  </FloatingLabel>
              </div>
              <div className={`${styles.input_container} ${styles[theme]}`}>
                <FloatingLabel 
                label={t('forms.state')}
                className={`col-lg-10 col-12 ${styles.label} ${styles[theme]}`}>
                    <Input
                    placeholder={t('forms.state')}
                    aria-label={t('forms.state')}
                    className={`${styles.input}`}
                    />
                  </FloatingLabel>
              </div>
              <div className={`${styles.input_container} ${styles[theme]}`}>
                <FloatingLabel 
                label={t('forms.city')}
                className={`col-lg-10 col-12 ${styles.label} ${styles[theme]}`}>
                    <Input
                    placeholder={t('forms.city')}
                    aria-label={t('forms.city')}
                    className={`${styles.input}`}
                    />
                  </FloatingLabel>
              </div>
              <div className={`${styles.input_container} ${styles[theme]}`}>
                <FloatingLabel 
                label={t('forms.address')}
                className={`col-lg-10 col-12 ${styles.label} ${styles[theme]}`}>
                    <Input
                    placeholder={t('forms.address')}
                    aria-label={t('forms.address')}
                    className={`${styles.input}`}
                    />
                  </FloatingLabel>
              </div>
              <div className={`${styles.input_container} ${styles[theme]}`}>
                <FloatingLabel 
                label='CEP'
                className={`col-lg-10 col-12 ${styles.label} ${styles[theme]}`}>
                    <Input
                    placeholder='CEP'
                    aria-label='CEP'
                    className={`${styles.input}`}
                    />
                  </FloatingLabel>
              </div>
        </section>
      </div>
      <div className={`d-flex justify-content-center`}>
        <section className={`col-12 col-lg-10 border border-secondary rounded-3 ${styles.section} ${styles[theme]}`}>
              <div className={`d-flex justify-content-between ${styles.section_header} ${styles[theme]}`}>
                <h2 className={`${styles.section_title}`}>Contatos</h2>
                <Button type='button' className={`${styles.edit_btn}`} >
                  EDITAR
                </Button>
              </div>
              <div className={`${styles.input_container} ${styles[theme]}`}>
                <FloatingLabel 
                label={t('forms.landline')}
                className={`col-lg-10 col-12 ${styles.label} ${styles[theme]}`}>
                    <Input
                    placeholder={t('forms.landline')}
                    aria-label={t('forms.landline')}
                    className={`${styles.input}`}
                    />
                  </FloatingLabel>
              </div>
              <div className={`${styles.input_container} ${styles[theme]}`}>
                <FloatingLabel 
                label={t('forms.phone_cell')}
                className={`col-lg-10 col-12 ${styles.label} ${styles[theme]}`}>
                    <Input
                    placeholder={t('forms.phone_cell')}
                    aria-label={t('forms.phone_cell')}
                    className={`${styles.input}`}
                    />
                  </FloatingLabel>
              </div>
        </section>
      </div>
      <div className={`d-flex justify-content-center`}>
        <section className={`col-12 col-lg-10 border border-secondary rounded-3 ${styles.section} ${styles[theme]}`}>
              <div className={`d-flex justify-content-between ${styles.section_header} ${styles[theme]}`}>
                <h2 className={`${styles.section_title}`}>Conta</h2>
                <Button type='button' className={`${styles.edit_btn}`} >
                  EDITAR
                </Button>
              </div>
              <div className={`${styles.input_container} ${styles[theme]}`}>
                <FloatingLabel 
                label='E-mail'
                className={`col-lg-10 col-12 ${styles.label} ${styles[theme]}`}>
                    <Input
                    placeholder='E-mail'
                    aria-label='E-mail'
                    className={`${styles.input}`}
                    />
                  </FloatingLabel>
              </div>
              <div className={`${styles.input_container} ${styles[theme]}`}>
                <FloatingLabel 
                label={t('forms.password')}
                className={`col-lg-10 col-12 ${styles.label} ${styles[theme]}`}>
                    <Input
                    placeholder={t('forms.password')}
                    aria-label={t('forms.password')}
                    className={`${styles.input}`}
                    />
                  </FloatingLabel>
              </div>
        </section>
      </div>
    </div>
  )
}

export default Layout(
  Profile,
  MainLayout,
  {
    title: 'Perfil de Usúario'
  }
  )

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}