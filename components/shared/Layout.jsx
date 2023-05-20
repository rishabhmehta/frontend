import styles from '@/styles/home.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default Layout
