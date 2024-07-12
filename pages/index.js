import Head from "next/head";
import Link from "next/link";
import { FaTwitter, FaGithub } from "react-icons/fa";

const Home = () => (
  <div>
    <Head>
      <title>travers pinkerton</title>
      <link rel="icon" href="/favicon.ico" />
      <meta lang="en" />
    </Head>

    <main className="p-16 mx-auto max-w-screen-lg">
      <header className="flex items-center justify-between">
        <h1 className="text-green-400 text-4xl font-extrabold hover:text-teal-400">
          travers pinkerton
        </h1>
        <Link legacyBehavior href="/blog">
          <a className="text-green-400 text-3xl font-extrabold hover:text-teal-400">
            blog
          </a>
        </Link>
      </header>
      <div className="mt-16 md:flex">
        <img
          className="rounded h-64 w-auto mx-auto mb-8 md:mb-0 md:mr-8"
          src="/aftonandi.jpg"
          alt="profile picture"
        />
        <div className="md:self-center">
          <h2 className="text-gray-300 text-2xl mb-8">
            👋 y'all. I'm a{" "}
            <span className="text-teal-400 hover:text-green-400">
              Software Engineer
            </span>{" "}
            living in Austin TX.
          </h2>
          {/* <h2 className="text-gray-300 text-xl mb-4">
            My speciality is building{" "}
            <span className="text-teal-400 hover:text-green-400">
              modern javascript web apps
            </span>
            . Additionally, I have experience leading engineers to create
            products through an end-user perspective.
          </h2>
          <h2 className="text-gray-300 text-xl">
            Currently fascinated by{" "}
            <span className="text-teal-400 hover:text-green-400">
              the JAM stack
            </span>
            .
          </h2> */}
        </div>
      </div>
    </main>

    <footer className="flex justify-center text-gray-300 text-xl">
      <a
        className="hover:text-pink-400 mx-4"
        href="https://twitter.com/Travers_P"
      >
        <FaTwitter />
      </a>
      <a
        className="hover:text-pink-400 mx-4"
        href="https://github.com/traverspinkerton/"
      >
        <FaGithub />
      </a>
    </footer>
  </div>
);

export default Home;
