import Link from "next/link"
import styles from '../styles/All.module.css'

const Workshops=()=>{
    return (
        <>
        <div className={styles.all}>
            <h1>Welcome to Workshops</h1>
            <Link href="/">Go Back</Link>
        </div>
        </>
    )
}

export default Workshops 