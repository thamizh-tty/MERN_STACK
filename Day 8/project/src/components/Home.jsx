import { useState } from "react";

function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <section style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ color: "blue" }}>Thamizh</h1>
      <h3>Frontend Developer</h3>

      {showIntro && (
        <p>I build modern web applications using React.</p>
      )}

      <button onClick={() => setShowIntro(!showIntro)}>
        {showIntro ? "Hide Intro" : "Show Intro"}
      </button>
    </section>
  );
}

export default Home;