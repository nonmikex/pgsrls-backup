export default function Videos() {
  return (
    <section className="w-full h-auto py-12 px-4 lg:px-[5%] xl:px-[10%]">
      <div className="w-full flex flex-col justify-center items-center mb-8">
        <h1 className="text-4xl font-black text-[--g-blue-dark]">
          Video e News
        </h1>
        <div className="w-24 bg-[--g-sky-blue] h-1 mt-3"></div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full">
          <h4 className="font-bold mb-3 text-lg">Lavorazioni Fibra Ottica</h4>
          <video
            controls
            className="w-full h-full lg:h-[800px] object-cover border"
            src="https://pub-351703b8d28a4d9cbef6bb45b5f0632b.r2.dev/video-01.MOV"
          ></video>
        </div>
        <div className="w-full">
          <h4 className="font-bold mb-3 text-lg">Minitrincea Fibra Ottica </h4>

          <video
            controls
            className="w-full h-full lg:h-[800px] object-cover border"
            src="https://pub-351703b8d28a4d9cbef6bb45b5f0632b.r2.dev/video-02.MOV"
          ></video>
        </div>
      </div>
    </section>
  );
}
