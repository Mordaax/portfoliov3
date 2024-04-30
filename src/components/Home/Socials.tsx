import type { FC } from 'react'
import {
  FiDribbble,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from 'react-icons/fi/index'
import { RiSnapchatLine } from 'react-icons/ri'
import { RxDiscordLogo } from 'react-icons/rx'
import styles from '@css/home.module.css'

export const Socials: FC = () => {
  return (
    <div className={styles.socials}>
      {[
        {
          aria: 'GitHub',
          icon: FiGithub,
          href: 'https://github.com/Mordaax',
        },
        {
          aria: 'Linkedin',
          icon: FiLinkedin,
          href: 'https://www.linkedin.com/in/cyrus-tan-889b0a210/',
        },
        
      ].map((link, index) => (
        <a
          href={link.href}
          target='_blank'
          rel='noreferrer'
          className={styles.social}
          key={index}
          aria-label={link.aria}
        >
          <link.icon size={22} />
        </a>
      ))}
    </div>
  )
}
