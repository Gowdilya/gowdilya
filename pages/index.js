import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Image
          priority
          src="/images/profile.jpg"
          className={"-z-10"}
          height={144}
          width={144}
          alt={"Gowdilya"}
        />
        <h1 className={utilStyles.heading2Xl}>{"Gowdilya"}</h1>
        <p>
          Hi, My Name is Gowdilya Jeyakumar and I'm a Software Developer from
          Rangle.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <h1>Posts</h1>
      <h2>
        <Link href="/posts/first-post">
          <a>First Post</a>
        </Link>
      </h2>
    </Layout>
  );
}
