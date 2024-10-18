import heroMainImg from "../assets/header-banner.jpg";

export default function HeaderBanner({ title }) {
  return (
    <main
      className="w-full h-[50vh] flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("${heroMainImg}")`,
      }}
    >
      <div className="w-full h-full bg-black/70 flex justify-center items-center">
        <h1 className="text-[12vw] sm:text-6xl uppercase font-bold text-white mt-20 text-center">
          {title}
        </h1>
      </div>
    </main>
  );
}
