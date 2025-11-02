export default function Home() {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* Optional: Your content goes here */}
      {/* <h1 style={{ color: "#fff", position: "relative", zIndex: 2 }}>WELCOME</h1> */}
    </div>
  );
}
