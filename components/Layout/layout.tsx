import Head from "next/head";
import Image from "next/";
import styles from "./layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Navbar from "../StyledNavBar/Navbar";
import useColorStore from "../../colorStore";

const name = "Gowdilya";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  const color1 = useColorStore((state) => state.color1);
  const color2 = useColorStore((state) => state.color2);

  const NavStyle = {
    bgColor: color1,
    textColor: color2,
  };

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar style={NavStyle}></Navbar>
      <div className={styles.inner}>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
