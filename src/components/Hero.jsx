import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-center items-center w-full mb-5 pt-10">
        <img src={logo} alt="sumz_logo" className="w-[50px] " />
      </nav>

      <h1 className="head_text">
        Summarize with
        <span className="orange_gradient "> OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source summarizer that
        transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
