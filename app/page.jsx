import Feed from "@components/Feed";
function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Unleash
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI prompts</span>
      </h1>
      <p className="desc text-center">
        It is a open-source AI prompting tool for discovering the best prompts from around the internet.

      </p>
      <Feed />
    </section>
  )
}

export default Home;