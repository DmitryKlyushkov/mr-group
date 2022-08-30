import type { NextPage } from "next";
import Head from "next/head";
import Layout from "@/components/layout/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          MR Group - надежный девелопер недвижимости в Москве | Продажа квартир
          в новостройках бизнес и премиум-класса | Официальный сайт
        </title>
        <meta
          name="description"
          content="Продажа жилой и коммерческой недвижимости в Москве от застройщика. Квартиры, пентхаусы, офисы и офисные блоки в лучших бизнес-центрах Москвы. Официальный сайт строительной компании MR Group"
        ></meta>
      </Head>
      <Layout>
        <h1>Hello world</h1>
      </Layout>
    </>
  );
};

export default Home;
