'use client'

import { FC, useEffect, useState } from 'react'
import styles from '@css/common.module.css'
import clsx from 'clsx'
import useSWR, { SWRConfiguration, Fetcher } from 'swr'
import useWindowSize, { Size } from '@lib/hooks/useWindowSize'

type Root = {
  song: Song
}

type Song = {
  title: string
  link: string
}

const config: SWRConfiguration = {
  fallbackData: {
    song: { title: 'Offline', link: '#' },
  },
  revalidateOnMount: false,
}

const fetcher: Fetcher<Root> = (input: RequestInfo | URL) =>
  fetch(input, { next: { revalidate: 300 } }).then((res) => res.json())

const Footer: FC = () => {
  const size: Size = useWindowSize()

  const [time, setTime] = useState<Date>(new Date())
  const [mounted, setMounted] = useState(false)
  const { data } = useSWR<Root>('/api/music', fetcher, config)

  useEffect(() => {
    setMounted(true)
    setInterval(() => setTime(new Date()), 1000)
  }, [])

  if (!mounted) return null

  return (
    <footer className={styles.footer}>
      <hr className={styles.hr} />
      <div className={styles.container}>
        <p className={styles.date}>
          <a
            href=''
            /* target='_blank' */
            rel='noreferrer'
            className={styles.location}
          >
            {typeof size.width !== 'undefined'
              ? size.width > 767
                ? 'Singapore, SG'
                : 'SG'
              : 'Singapore, SG'}
          </a>
        
        </p>
        
      </div>
    </footer>
  )
}

export default Footer
