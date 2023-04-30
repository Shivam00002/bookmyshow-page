"use client";
import Image from "next/image";
import data from "./data/data";
import Navbar from "@/components/Navbar";
import styles from "../styles/Events.module.css";

function Events() {
  return (
    <>
      <Navbar />

      <div id={styles.parent}>
        {data.length > 0 &&
          data.map((el) => {
            return (
              <div key={el.id}>
                <Image src={el.img} width="250" height="430" alt={el.title} />
                <h4 className={styles.title}>{el.title}</h4>
                <p className={styles.stream}>{el.streaming}</p>
                <p className={styles.price}> Rs: {el.price} </p>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Events;
