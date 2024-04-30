import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Layout } from '@components/Layout'
import styles from '@css/common.module.css'
import { rgbDataURL } from '@components/MDX'

const Error: NextPage = () => (
  <Layout>
    <div className={styles.error_wrapper}>
      <div>
        <h1>404—not found.</h1>
        <p className={styles.paragraph}>
          I don&apos;t know what you&apos;re looking for, but it ain&apos;t
          here.
        </p>
       
        
      </div>
    </div>
  </Layout>
)

export default Error
