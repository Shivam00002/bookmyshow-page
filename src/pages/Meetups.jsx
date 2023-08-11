import Link from "next/link"
import styles from '../styles/All.module.css'

const Meetups=()=>{
    return (
        <>


        <div className={styles.all}>
            <h1>Welcome to Meetups</h1>
            <Link href="/">Go Back</Link>
        </div>
        </>
    )
}

export default Meetups