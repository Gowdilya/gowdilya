import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout/layout";
import { SketchPicker } from "react-color";
import useColorStore from "../colorStore";

export default function Colour() {
  const color1 = useColorStore((state) => state.color1);
  const setColor1 = useColorStore((state) => state.setColor1);
  const color2 = useColorStore((state) => state.color2);
  const setColor2 = useColorStore((state) => state.setColor2);

  return (
    <>
      <Layout home={"/"}>
        <Head>
          <title>Color</title>
        </Head>
        <div className="inline-block m-5 mt-32">
          <h1>First Color</h1>
          <SketchPicker
            color={color1}
            onChangeComplete={(color) => {
              setColor1(color.hex);
            }}
          />
        </div>
        <div className="inline-block m-5">
          <h1>Second Color</h1>
          <SketchPicker
            color={color2}
            onChangeComplete={(color) => {
              setColor2(color.hex);
            }}
          />
        </div>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
  );
}
