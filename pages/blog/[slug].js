import Head from "next/head";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import matter from "gray-matter";
import marked from "marked";
import path from "path";
import fs from "fs";

import markdownStyles from "../../css/markdown-styles.module.css";

export default function Post({ title, date, htmlString }) {
  return (
    <>
      <Head>
        <title>travers pinkerton - blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta lang="en" />
      </Head>

      <main className="p-16 mx-auto max-w-screen-xl">
        <header className="flex items-center">
          <Link legacyBehavior href="/">
            <FaHome className="text-green-400 text-2xl font-extrabold hover:text-teal-400 cursor-pointer mr-8">
              travers pinkerton
            </FaHome>
          </Link>
          <Link legacyBehavior href="/blog">
            <a className="text-green-400 text-2xl font-extrabold hover:text-teal-400">
              Posts
            </a>
          </Link>
        </header>
        <h1 className="text-teal-400 hover:text-green-400 text-3xl my-8">
          {title}
        </h1>
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: htmlString }}
        />
        <p className="text-gray-300 mt-8">{date}</p>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = fs
    .readdirSync("posts")
    .map((slug) => ({ params: { slug: slug.replace(".md", "") } }));

  return { paths, fallback: false };
}

// const postsPath = join(process.cwd(), "posts");

export async function getStaticProps({ params: { slug } }) {
  const file = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");
  const { data: metaData, content } = matter(file);

  return {
    props: {
      title: metaData.title,
      htmlString: marked(content),
      date: metaData.date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    },
  };
}
