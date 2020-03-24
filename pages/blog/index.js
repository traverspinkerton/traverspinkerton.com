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
            Archive
          </a>
        </Link>
      </header>
      {posts.map(post => (
        <div key={post.title}>
          <h3>{post.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          <p>{post.date}</p>
        </div>
      ))}
    </main>
  </div>
);

const postsPath = join(process.cwd(), "posts");

export async function getStaticProps() {
  const posts = fs.readdirSync(postsPath).map(slug => {
    let file = fs.readFileSync(`${postsPath}/${slug}`, "utf-8");
    let post = matter(file);

    return {
      title: post.data.title,
      content: post.content,
      date: post.data.Date.toString()
    };
  });

  return {
    props: {
      posts
    }
  };
}

export default Home;
