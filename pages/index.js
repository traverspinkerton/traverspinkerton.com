import Head from "next/head";

const Home = () => (
  <div>
    <Head>
      <title>travers pinkerton</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main class="p-16 mx-auto max-w-screen-lg">
      <h1 class="text-green-400 text-4xl font-extrabold hover:text-teal-400">
        travers pinkerton
      </h1>
      <div class="mt-16 md:flex">
        <img
          class="rounded h-64 w-auto mx-auto mb-8 md:mb-0 md:mr-8"
          src="/aftonandi.jpg"
        />
        <div class="md:self-center">
          <h2 class="text-gray-300 text-2xl mb-4">
            👋 y'all. I'm a Software Engineer living in Austin TX.
          </h2>
          <h2 class="text-gray-300 text-xl">
            My speciality is building modern javascript web apps. Additionally,
            I have experience leading engineers to create products through an
            end-user perspective.
          </h2>
        </div>
      </div>
    </main>

    <footer class="flex justify-center text-gray-300">
      <a class="hover:text-green-400 mx-4" href="https://twitter.com/Travers_P">
        Twitter
      </a>
      <a
        class="hover:text-green-400 mx-4"
        href="https://github.com/traverspinkerton/"
      >
        Github
      </a>
    </footer>
    {/* <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style> */}
  </div>
);

export default Home;
