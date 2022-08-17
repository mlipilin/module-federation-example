import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

import ErrorBoundary from '../ErrorBoundary'

import logo from '../../logo.svg'

import styles from './styles.module.scss'

// @ts-ignore
const Profile = React.lazy(() => import('auth/Profile'))
console.log('Profile', Profile)

export type Props = {}

function Template() {
  return (
    <div className={styles.Template}>
      <header className={styles.Template__Header}>
        <Link to="/" className={styles.Template__Logo}>
          <img src={logo} alt="logo" />
        </Link>
        <nav className={styles.Template__Menu}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.Template__MenuLink} ${styles.Template__MenuLink_active}`
                : styles.Template__MenuLink
            }
            to="/request"
          >
            Заявки
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.Template__MenuLink} ${styles.Template__MenuLink_active}`
                : styles.Template__MenuLink
            }
            to="/deal"
          >
            Сделки
          </NavLink>
        </nav>
        <div className={styles.Template__Profile}>
          <ErrorBoundary>
            <React.Suspense fallback={'loading...'}>
              <Profile name="admin@example.com" />
            </React.Suspense>
          </ErrorBoundary>
        </div>
      </header>
      <main className={styles.Template__Main}>
        <Outlet />
      </main>
    </div>
  )
}

Template.defaultProps = {}

export default Template
