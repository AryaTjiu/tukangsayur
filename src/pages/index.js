import Image from "next/image";
import Head from "next/head";
import Section1 from "./Home/Section1";
import Section2 from "./Home/Section2";
import Section3 from "./Home/Section3";
import Section4 from "./Home/Section4";
import Section5 from "./Home/Section5";
import TextBanner from "./components/textbanner";
import { useEffect } from "react";

import AOS from 'aos';
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({duration : 1000});
  }, [])

  return (
    <>
      <Head>
        <title>TukangSayur - belanja semua kebutuhan gizimu hanya disini</title>
      </Head>
      <main className={`w-full overflow-hidden`}>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <TextBanner title={"Lihat bahan masakanmu sekarang"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exercitationem quisquam, rem asperiores excepturi reiciendis cum commodi eveniet qui corrupti voluptatum animi fugit fuga nisi quia rerum odio voluptate impedit."} url={"#"} textUrl="kunjungi sekarang"/>
        <Section5/>
      </main>
    </>
  );
}
