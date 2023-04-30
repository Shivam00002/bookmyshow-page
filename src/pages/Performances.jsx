import Link from "next/link"
import styles from '../styles/All.module.css'

const Performances=()=>{
    return (
        <>
        <div className={styles.all}>
            <h1>Welcome to Performances</h1>
            <Link href="/">Go Back</Link>
        </div>
        </>
    )
}

export default Performances