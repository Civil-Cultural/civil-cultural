/* ----------- RESOURCES ----------- */
import { forwardRef, Ref, useState } from 'react';

import * as ReactIs from 'react-is'
/* ----------- HOOKS ----------- */
import { useTheme } from "Context/ThemeContext";

/* ----------- CONTRACTS ----------- */
import { ModalPopupProps } from 'Contracts/Components'

/* ----------- COMPONENTS ----------- */
import Popup from 'reactjs-popup'
import { IconBase } from 'react-icons/lib'
import { PopupActions } from 'reactjs-popup/dist/types'

/* ----------- STYLES ----------- */
import styles from 'Components/ModalPopup/styles.module.scss'

function ModalPopup (
  {
    icon,
    open,
    iconClose,
    title,
    content,
    footer,
    children,
    stateless,
    ...props
  }: ModalPopupProps,
  ref?: Ref<PopupActions>
) {
  
  const [openPopup, setOpenPopup] = stateless ? stateless : useState(false)
  const { theme } = useTheme()

  const closeModal = () => setOpenPopup(false)

  const ModalElements = () => {
    return (
      <>
        {
          title && (
            ReactIs.isElement(title) ?
              title :
              (
                <div className={`${styles.popupTitleContainer} ${styles[theme]}`} >
                  <h3 className={styles.popupTitle}>{icon && (ReactIs.isElement(icon) || icon instanceof IconBase) ? icon : ''} {title}</h3>
                </div>
              )
          )
        }
        {
          ReactIs.isElement(content) ?
            content :
            (
              <div className={styles.popupContentContainer} >
                <p className={styles.popupContent}>{content}</p>
              </div>
            )
        }
        {
          footer && (
            ReactIs.isElement(footer) ?
              footer :
                (
                  <p className={styles.popupFooter}>
                    <div className={styles.groupButtons}>
                      <button className={styles.popupButton} onClick={closeModal}>{footer}</button>
                    </div>
                  </p>
                )
          )
        }
      </>
    )
  }

  return (
    <Popup
      className={`${styles.popupContainer} ${styles[theme]}`}
      ref={ref}
      open={openPopup}
      onClose={() => setOpenPopup(false)}
      modal
      closeOnDocumentClick
      closeOnEscape
      position='top center'
      {...props}
    >
      {children ?? ModalElements}
    </Popup>
  )
}

export default forwardRef(ModalPopup)