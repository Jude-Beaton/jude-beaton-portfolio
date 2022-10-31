import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jude Beaton Portfolio</title>
        <meta
          name="description"
          content="Software and computing portfolio of Jude Beaton"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className=" bg-blue-700 min-h-screen">
          <h1>Hello</h1>
        </section>
      </main>
    </div>
  );
}
