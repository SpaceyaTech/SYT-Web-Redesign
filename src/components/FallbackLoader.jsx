import Loader from "./Loader";

export default function FallbackLoader() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100dvh-62px)] md:h-[calc(100dvh-82px)]">
      <Loader />
      <span className="text-xl text-primary font-medium">Loading...</span>
    </div>
  );
}
