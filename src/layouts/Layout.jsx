import styles from '../layouts/Layout.module.css'


function Layout({children}) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3>Book App</h3>
        <p>
            <a href="http://botostart.it" target="_blank"> Botostart</a>
            | React.js Full Course
        </p>
      </header>
        {children}
      <footer className={styles.footer}>
        <p>Developed by azita with :Love </p>
      </footer>
    </div>
  );
}

export default Layout;
