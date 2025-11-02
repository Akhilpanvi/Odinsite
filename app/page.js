export default function Home() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      style={{
        width: "100vw",
        height: "100vh",
        objectFit: "cover"
      }}
      src="/bg.mp4"
    />
  );
}