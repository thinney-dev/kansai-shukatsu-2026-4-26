import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const SakuraParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        detectRetina: true,
        particles: {
          number: {
            value: 30, // 花びらの数（増やしたい場合はここを調整）
            // ▼ 修正: エラー解消のため area を削除
            density: { enable: true }, 
          },
          // ▼ 修正: 画像本来の色を出すために白（#ffffff）に戻します
          color: { value: "#ffffff" }, 
          shape: {
            // ▼ 修正: 丸を消して、画像（桜）だけを降らせる設定にしました
            type: "image",
            options: {
              image: {
                src: "/sakura.png", 
                width: 100,
                height: 100,
              },
            },
          },
          opacity: {
            value: { min: 0.4, max: 0.8 },
            animation: { enable: true, speed: 0.5, sync: false },
          },
          size: {
            value: { min: 10, max: 20 },
          },
          move: {
            enable: true,
            speed: { min: 1, max: 3 }, // 落ちるスピード
            direction: "bottom",
            random: true,
            straight: false, // ひらひらさせる
            outModes: {
              default: "out",
              top: "none",
            },
          },
          rotate: {
            value: { min: 0, max: 360 }, // くるくる回転させる
            animation: { enable: true, speed: 5, sync: false },
          },
        },
      }}
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
    />
  );
};

export default SakuraParticles;