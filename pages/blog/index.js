import Head from "next/head";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const Home = ({ posts }) => (
  <div>
    <Head>
      <title>travers pinkerton - blog</title>
      <link rel="icon" href="/favicon.ico" />
      <meta lang="en" />
    </Head>

    <main class="p-16 mx-auto max-w-screen-lg">
      <header class="flex items-center">
        <Link href="/">
          <FaHome class="text-green-400 text-4xl font-extrabold hover:text-teal-400 cursor-pointer mr-8">
            travers pinkerton
          </FaHome>
        </Link>
        <Link href="/blog">
          <a class="text-green-400 text-3xl font-extrabold hover:text-teal-400">
            Posts
          </a>
        </Link>
      </header>
      <ul>
        {posts.map(({ title, date, path }) => (
          <li key={path} class="mt-8 flex justify-between items-center">
            <Link href={`/blog/${path}`}>
              <a class="text-teal-400 hover:text-green-400 text-2xl">{title}</a>
            </Link>
            <p class="text-gray-300">{date}</p>
          </li>
        ))}
      </ul>
    </main>
  </div>
);

const postsPath = join(process.cwd(), "posts");

export async function getStaticProps() {
  const posts = fs.readdirSync(postsPath).map(slug => {
    let file = fs.readFileSync(`${postsPath}/${slug}`, "utf-8");
    let { data } = matter(file);

    return {
      path: slug.replace(".md", ""),
      title: data.title,
      date: data.Date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      })
    };
  });

  return {
    props: {
      posts
    }
  };
}

export default Home;
