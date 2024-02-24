import Link from "next/link"
import styles from '../styles/All.module.css'

const Talks=()=>{
    return (
        <>

        <div className={styles.all}>
            <h1>Welcome to Talks</h1>
            <Link href="/">Go Back</Link>
        </div>
        </>
    )
}

export default Talks