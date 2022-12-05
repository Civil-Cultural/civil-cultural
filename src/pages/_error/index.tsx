/* ----------- RESOURCES ----------- */
import { useRouter } from 'next/router'
import Image from 'next/image'

/* ----------- COMPONENTS ----------- */
import Astro from 'Assets/astro_error.png'
import AstroIllustration from 'assets/astro_error.png'
import {
    Col
} from 'react-bootstrap'

/* ----------- STYLES ----------- */
import styles from 'Pages/_error/styles.module.scss'
    

export default function Error({ statusCode }) {
    const router = useRouter()
    return (
        <Col className={`${styles.errorContainer} d-flex flex-column flex-wrap justify-content-center align-items-center p-0 m-0`}>
            <Col className={`${styles.errorContent} col-11 col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-11 col-xs-11`}>
                <span className={styles.errorBadge}>Error</span>

                <p className={styles.errorStatusCode}>{ statusCode }</p>

                <Col className={styles.boxImg}>
                    <Image
                        src={AstroIllustration}
                        alt='Astro'
                        objectFit='contain'
                        width={86}
                        height={86}
                    />
                </Col>
            </Col>
            
            <Col className='col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-11 col-xs-11 mt-3'>
                <p style={{color: '#546475'}} className='text-center mb-0'>Let's go <a className={styles.linkBack} onClick={() => router.back()}>back</a></p>
            </Col>
        </Col>
    )
}

Error.getInitialProps = ({ res, err }) => {
    return { statusCode: res ? res.statusCode : err ? err.statusCode : 404 }
}
