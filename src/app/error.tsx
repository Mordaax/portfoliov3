'use client'

import { FC, useEffect } from 'react'
import Image from 'next/image'
import { Layout } from '@components/Layout'
import styles from '@css/common.module.css'
import { rgbDataURL } from '@components/MDX'

const Error: FC<{ error: Error }> = ({ error }) => {
  useEffect(() => console.error(error), [error])
  return (
    <Layout>
      <div className={styles.error_wrapper}>
        <div>
          <h1>Something went wrong up—try refreshing.</h1>
          <p className={styles.paragraph}>
            :)
          </p>
         
        </div>
      </div>
    </Layout>
  )
}

export default Error
