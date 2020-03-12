import Head from "next/head";
import { FaTwitter, FaGithub } from "react-icons/fa";

const Home = () => (
  <div>
    <Head>
      <title>travers pinkerton</title>
      <link rel="icon" href="/favicon.ico" />
      <meta lang="en" />
    </Head>

    <main class="p-16 mx-auto max-w-screen-lg">
      <h1 class="text-green-400 text-4xl font-extrabold hover:text-teal-400">
        travers pinkerton
      </h1>
      <div class="mt-16 md:flex">
        <img
          class="rounded h-64 w-auto mx-auto mb-8 md:mb-0 md:mr-8"
          src="/aftonandi.jpg"
          alt="profile picture"
        />
        <div class="md:self-center">
          <h2 class="text-gray-300 text-2xl mb-8">
            👋 y'all. I'm a{" "}
            <span class="text-teal-400 hover:text-green-400">
              Software Engineer
            </span>{" "}
            living in Austin TX.
          </h2>
          <h2 class="text-gray-300 text-xl mb-4">
            My speciality is building{" "}
            <span class="text-teal-400 hover:text-green-400">
              modern javascript web apps
            </span>
            . Additionally, I have experience leading engineers to create
            products through an end-user perspective.
          </h2>
          <h2 class="text-gray-300 text-xl">
            Currently fascinated by{" "}
            <span class="text-teal-400 hover:text-green-400">
              the JAM stack
            </span>
            .
          </h2>
        </div>
      </div>
    </main>

    <footer class="flex justify-center text-gray-300 text-xl">
      <a class="hover:text-pink-400 mx-4" href="https://twitter.com/Travers_P">
        <FaTwitter />
      </a>
      <a
        class="hover:text-pink-400 mx-4"
        href="https://github.com/traverspinkerton/"
      >
        <FaGithub />
      </a>
    </footer>
  </div>
);

export default Home;
