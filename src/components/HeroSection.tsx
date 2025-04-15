import Navbar from "./NavBar";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      <Navbar />

      {/* Bottom Background Video (z-0) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://s3-figma-videos-production-sig.figma.com/video/1347661822068085501/TEAM/d8d2/4cb9/-535b-4005-b2d7-d7410b860218?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dnCnQCOT2JDq2k6-x3J8R7c8bCUGiT1Huf20ciVqJNfMk1ekEMgz9SCgZeGWE2XcOAQuMHYwffnihVLLR8Gob8nL-PBgqXaw-~upoHaUAYwYZM1VnX~QBSfOiMBEJtlrJo-BfbrALMJuXIy5yAcgMYBqf6~ijwW~w9Ghirq-3mM4PBU3pFEX0H3sNWd4W0RnV6Jmmk2sgm0v0rk8vTelT4kKwpW6F2QtJ7VUQdbEH3aEuIrGFNDLV8MA377ugnUc~DMnFzRdQXjKYH537ZGQFCvBUvA3czhxtVyVBK7ATBHFRzl1BQsxlnQDnsx3l6F8RBYOpZ98SKiSMgkdAdODUw__"
          type="video/mp4"
        />
      </video>

      {/* Top Layer Video (z-10) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-[100vh] sm:h-[110vh] md:h-[130vh] lg:h-[150vh] object-cover z-10 opacity-70"
      >
        <source
          src="https://s3-figma-videos-production-sig.figma.com/video/1347661822068085501/TEAM/b2b8/b248/-204a-450e-9538-06a123873ec5?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TPs-JQh1tTBOAXJsv6EAcpf-sjVxhGsHjCFyKzHd8ZP5UshMHety5T81DpcygBjw53-876Ak4JyB1O4z-sSunsNY9Ful4durV20B7QnVmIWws3AxIwelqlXjOkadj7o6CZDeoFJkkPSuCpBqGUJsMdYQXWAL6R5jgHl4dbELdBjdCMqvxEQKDdjO4IH7cDt1zyLMLw3oUdsYCzGkCS4dncK7~tw3h3QXcNkBUcM50iqCDeWxKcDrunDSvqJMCecmogXeceDOS00wOpL-DKFUh8h-OEVnilTWSDjJcJuFnmBBxZnNlTgLiaQ0rEFwXvkj0Ls~6x7ubpdl5Oc5pLyiGA__"
          type="video/mp4"
        />
      </video>

      {/* Overlay Content (z-20) */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <div className="max-w-4xl mx-auto pt-32  relative ">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
            Kyptronix LLP –
          </h2>

          <h1 className="sm:text-2xl md:text-4xl lg:text-5xl font-bold mt-2 leading-tight ">
            THE NEXT THING IN
          </h1>
          <h1 className="text-transparent sm:text-2xl md:text-4xl lg:text-5xl font-bold mt-2 bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400">
            DIGITAL INDUSTRY
          </h1>
          <p className="mt-6 text-gray-300 text-sm sm:text-xs md:text-lg lg:text-sm">
            At Kyptronix LLP, we’re not just building websites, apps, or
            marketing strategies—we’re creating business success. Based in
            Delaware, we help companies across the U.S. scale rapidly, increase
            conversions, and dominate their industries.Whether you need a
            custom-built website that drives traffic, a mobile app that wows, or
            a blockchain solution that disrupts your industry, Kyptronix is your
            trusted digital partner.
          </p>
          <p className="mt-6 text-sm text-gray-300 md:text-1xl lg:text-sm">
            Don’t just compete—lead. Ready to see what Kyptronix can do for you?
          </p>
          <div className="mt-8 flex justify-center gap-8">
            {/* Gradient Button */}
            <button className="flex items-center gap-2 pl-4 pr-2 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#42e9ea] to-[#7a5fff] shadow-md transition hover:brightness-110">
              Get Started Today
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white">
                <span className="text-black text-sm">{">"}</span>
              </span>
            </button>

            {/* Outline Link Button */}
            <button className="flex items-center gap-2 text-sm font-semibold text-[#42e9ea] hover:text-white transition">
              View Our Work
              <span className="text-[#42e9ea] text-base ">{">"}</span>
            </button>
          </div>
        </div>

        <div className="bottom-0 flex justify-center items-end h-[120px] sm:h-[140px] md:h-[160px] lg:h-[225px] overflow-hidden">
          <div className="absolute h-[60px] sm:h-[80px] md:h-[100px] lg:h-28 bottom-0 left-1/2 transform -translate-x-[150%] sm:-translate-x-[140%] md:-translate-x-[132%] rotate-[-10deg] z-10">
            <video
              src="https://s3-figma-videos-production-sig.figma.com/video/1347661822068085501/TEAM/d441/ec39/-1c28-464d-bde2-25c8f3d46f66?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ieFSUdBknL894g8Kn8gyl8OWRWMfOEWV8vEkFfx9~qAbkpw62nNcsxpt1iVMy0Txm0NWlKAtmcO~5poaaPBzIV7-~FpSlzP~Nzo4A-duwuKRxbGi1EcmoN8zUxUVrEo8yDccRRiZD02SLTfLwgbLVkhQAa09TkAqxRAhhGqK2mRkrvE2tsq4G6AvrGcKKs7FXzfjoobiBWM9U45NG96UunEEbz224l96CZGHyqYrZpkixOa7PSGQu1mRci8aoOgkg0Oo6~0mUwcFLCi3AAZ5QeiVOH-JZlVVUhiVfwowzuvkqVbpqj~e5fB4Ra9H3SOLQ0P-kSfTRYIlC78CCf6fpw__"
              className="w-[120px] sm:w-[160px] md:w-[200px] rounded-xl shadow-lg align-bottom"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          <div className="absolute h-[80px] sm:h-[100px] md:h-[120px] lg:h-40 bottom-0 z-20">
            <video
              src="https://s3-figma-videos-production-sig.figma.com/video/1347661822068085501/TEAM/a6eb/02b2/-29cf-45e5-99e2-13a8b9cb8075?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MatOeras50BhjXQE3O2bzpjvYYlXqBGi6En5~iMDu2tTsEROA5yMeK6DhjdPFEu1703qTqNSwqd~LbL1BHg29Fg-sclw8OA2R48y4qLSEleBAS1E73vfsyAJGbenE1Q5kefLei-D4jWiIkFsX4cNflEJnwP9oGvXP~PBJMu~VfQ1uqP2NjiQ7S4erjX8zJ4x4e9okokNwjvQb-o4Nu~mxxuO58s2TdiZnLd7mrqvmqriwB5CrjUvCffUN8QZ0~l5AqFtGpEUrNiOgSwmHTWlmy1ylZVbGw4fCqo7Avu60JrGH0Jx3WUas2ffe3Z6kMM8-iAyDVB4UH3qmJ5HF78Cuw__"
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[260px] rounded-xl shadow-2xl align-bottom"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          <div className="absolute h-[60px] sm:h-[80px] md:h-[100px] lg:h-28 bottom-0 right-1/2 transform translate-x-[150%] sm:translate-x-[140%] md:translate-x-[106%] rotate-[10deg] z-10 ">
            <video
              src="https://s3-figma-videos-production-sig.figma.com/video/1347661822068085501/TEAM/f2c2/4c8e/-0f71-4295-af9a-0703bb29c3bc?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ge4kyOwW--HvYR7WF0okpYWaO9OtkwaISufdun32TYSrwGnTdVT-r~uDsZqzMYyVvWUkEcGDzfGboHMBEApq2POMRJyzhHDITlvTtVU4j7Xe7BALy5PtVGwkNo-fzomtvKGBs2pn0pySBTJe1YIlXK7i9ELmt8OrMgY9Gxr9tElLGvar8go3xzicBefnD~ZF7wlZXtV3u1CdOoxvhozQLAQKk~EoSBbIg4pzcjHxhehw8pmgW4YO~hcnomxTXKHCm8Ys2OM9iAhcYDxm5MLBn1JxXQLOi5U7OkEmSzgiBJj3OFtY-SzicRzPnI0mjlUxuNe3HN0jqqGAZDR3g77~Ng__"
              className="w-[120px] sm:w-[160px] md:w-[200px] lg:w-[260px] rounded-xl shadow-2xl align-bottom"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
