import Link from "next/link"
import styles from '../styles/All.module.css'

const Conferences=()=>{
    return (
        <>
        <div className={styles.all}>
            <h1>Welcome to Conferences</h1>
            <Link href="/">Go Back</Link>
        </div>
        </>
    )

}

export default Conferences