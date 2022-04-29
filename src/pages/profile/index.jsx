/* ----------- RESOURCES ----------- */
import { useTheme } from 'Hooks/useTheme'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

/* ----------- COMPONENTS ----------- */
import { Layout } from 'utils/Layout'
import MainLayout from 'Layouts/MainLayout'
import Input from 'Components/Input'
import { FloatingLabel } from 'react-bootstrap'
import Button from 'Components/Button'

/* ----------- ICONS ----------- */
import { MdLocationPin } from 'react-icons/md';

/* ----------- STYLES ----------- */
import styles from 'Pages/profile/styles.module.scss'

function Profile() {
  const { theme } = useTheme()
  const { t } = useTranslation();

  return (
    <div className={`d-flex col-md row g-0 ${styles.body} ${styles[theme]}`}>
        <section className={`col-md-4 ${styles.profile_container} ${styles[theme]}`}>
          <div className={`border ${styles.profile_container_card}`}>
            <div className={`d-flex justify-content-center ${styles.profile_container_img}`}>
              <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvvPm9NjtkiWYuwmr0q33RHCaXLCLyGTWht77TOxwWj_opyyGPySxZ61s_rRyqus_3kcM&usqp=CAU"
              alt="Sua imagem de perfil"
              className={`rounded-3  ${styles.profile_img}`}
              />
            </div>
            <div className={`d-flex justify-content-center ${styles.profile_container_name} ${styles[theme]}`}>
              <FloatingLabel className={`${styles.profile_container_label} ${styles[theme]}`} 
              label={t('forms.name')}>
                <Input placeholder={t('forms.name')}
                aria-label={t('forms.name')}
                disabled={true}
                className={`${styles.profile_name_input}`}
                />
              </FloatingLabel>
            </div>
            <div className={`d-flex justify-content-center ${styles.profile_container_location}`}>
               <span className={styles.location_icon}><MdLocationPin/></span>
               <FloatingLabel label={t('forms.country')} className={`${styles.profile_container_label} ${styles[theme]}`}>
                  <Input placeholder={t('forms.country')}
                  aria-label={t('forms.country')}
                  disabled={true}
                  className={`${styles.profile_location}`}
                  />
               </FloatingLabel>
            </div> 
            <div className={`d-flex justify-content-center ${styles.profile_container_location}`}>
               <span className={styles.location_icon}><MdLocationPin/></span>
               <FloatingLabel label={t('forms.state')} className={`${styles.profile_container_label} ${styles[theme]}`}>
                  <Input placeholder={t('forms.state')}
                  aria-label={t('forms.state')}
                  disabled={true}
                  className={`${styles.profile_location}`}
                  />
               </FloatingLabel>
            </div>
            <div className={`d-flex justify-content-center ${styles.profile_container_location}`}>
              <span className={styles.location_icon}><MdLocationPin/></span>
               <FloatingLabel className={`${styles.profile_container_label} ${styles[theme]}`} label={t('forms.city')}>
                  <Input placeholder={t('forms.city')}
                  aria-label={t('forms.city')}
                  disabled={true}
                  className={`${styles.profile_location}`}
                  />
               </FloatingLabel>
            </div>
            <Button type="button" className={`${styles.edit_btn}`} onClick={() => {setEditSection(!editSection)}}>
              Editar
            </Button>
          </div>
        </section>
        <section className={`col-md-8 container ${styles.infos_container} ${styles[theme]}`}>
          <div className={`row justify-content-center ${styles[theme]}`}>
            <div className={`col-md-8 ${styles.field}`}>
              <FloatingLabel className={`${styles.field_label} ${styles[theme]}`} label='E-mail'>
                <Input placeholder='E-mail'
                aria-label='E-mail'
                disabled={true}
                className={styles.field_input}
                />
              </FloatingLabel>
            </div>
          </div>
          <div className={`row justify-content-center ${styles[theme]}`}>
            <div className={`col-md-8 ${styles.field}`}>
              <FloatingLabel className={`${styles.field_label} ${styles[theme]}`} 
              label={t('forms.phone_cell')}>
                <Input placeholder={t('forms.phone_cell')}
                aria-label={t('forms.phone_cell')}
                disabled={true}
                className={styles.field_input}
                />
              </FloatingLabel>
            </div>
          </div>
          <div className={`row justify-content-center ${styles[theme]}`}>
            <div className={`col-md-8 ${styles.field}`}>
              <FloatingLabel className={`${styles.field_label} ${styles[theme]}`} 
              label={t('forms.landline')}>
                <Input placeholder={t('forms.landline')}
                aria-label={t('forms.landline')}
                disabled={true}
                className={styles.field_input}
                />
              </FloatingLabel>
            </div>
          </div>
          <div className={`row justify-content-center`}>
            <div className={`col-md-8 ${styles.field}`}>
              <FloatingLabel className={`${styles.field_label} ${styles[theme]}`} 
              label={t('forms.personal_identification')}>
                <Input placeholder={t('forms.personal_identification')}
                aria-label={t('forms.personal_identification')}
                disabled={true}
                className={styles.field_input}
                />
              </FloatingLabel>
            </div>
          </div>
          <div className={`row justify-content-center`}>
            <div className={`col-md-8 ${styles.field}`}>
              <FloatingLabel className={`${styles.field_label} ${styles[theme]}`} label='CEP'>
                <Input placeholder='CEP'
                aria-label='CEP'
                disabled={true}
                className={styles.field_input}
                />
              </FloatingLabel>
            </div>
          </div>
          <div className={`row justify-content-center`}>
            <div className={`col-md-8 ${styles.field}`}>
              <FloatingLabel className={`${styles.field_label} ${styles[theme]}`} 
              label={t('forms.address')}>
                <Input placeholder={t('forms.address')}
                aria-label={t('forms.address')}
                disabled={true}
                className={styles.field_input}
                />
              </FloatingLabel>
            </div>
          </div>
        </section>
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