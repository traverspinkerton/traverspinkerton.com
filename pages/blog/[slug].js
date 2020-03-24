import Head from "next/head";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import matter from "gray-matter";
import marked from "marked";
import path from "path";
import fs from "fs";

export default function Post({ title, date, htmlString }) {
  return (
    <>
      <Head>
        <title>travers pinkerton - blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta lang="en" />
      </Head>

      <main class="p-16 mx-auto max-w-screen-lg">
        <header class="flex items-center">
          <Link href="/">
            <FaHome class="text-green-400 text-2xl font-extrabold hover:text-teal-400 cursor-pointer mr-8">
              travers pinkerton
            </FaHome>
          </Link>
          <Link href="/blog">
            <a class="text-green-400 text-2xl font-extrabold hover:text-teal-400">
              Posts
            </a>
          </Link>
        </header>
        <h1 class="text-teal-400 hover:text-green-400 text-3xl my-8">
          {title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        <p class="text-gray-300 mt-8">{date}</p>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = fs
    .readdirSync("posts")
    .map(slug => ({ params: { slug: slug.replace(".md", "") } }));

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
      date: metaData.Date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      })
    }
  };
}
