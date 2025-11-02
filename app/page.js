export default function Home() {
  return (
    <div style={{ position: "fixed", inset: 0, overflow: "hidden" }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          transform: "translate(-50%, -50%)"
        }}
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
