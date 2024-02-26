import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/Microsoft-Azure-Logo.png"
          alt="Microsoft Logo"
          width={250}
          height={250}
        />
      </div>
      <h1>Azure Posts</h1>
      <p>
        It is a sample application to host Azure Posts and Integrate Azure
        Service with NextJS
      </p>
    </section>
  );
}
