import Head from "next/head";
import Header from "../../core/components/warpper/header/Header";
import ArticleGrid from "../../core/components/grid/ArticleGrid";
import productList from "../../public/static/products/productList.json";
import { IArticle } from "../../core/components/grid/Article";

//write a parse which takes the json and returns an array of IArticle
//then you can use the array in the ArticleGrid component
// how to parse a json file to a javascript object
// https://stackoverflow.com/questions/20008134/how-to-parse-a-json-file-in-javascript
const parse = (json: any) => {
  const articles: IArticle[] = [];
  const products = JSON.parse(JSON.stringify(json));
  Object.entries(products).map(([key, value]) => {
    value.map((product: any) => {
      articles.push({
        name: product.product_name,
        imageScr: product.product_image,
        articleSrc: product.product_link,
        specialPrice: product.product_special_price,
        oldPrice: product.product_price,
      });
    });
  });
  return articles;
};

export default function Home() {
  return (
    <>
      <Head>
        <title>SALES - War of Mind</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="block">
        <ArticleGrid articles={parse(productList)} />
      </section>
    </>
  );
}
