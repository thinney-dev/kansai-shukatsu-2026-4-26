import { useState, useEffect, useCallback } from "react";
import { Users, Building2, TrendingUp } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const features = [
  {
    number: "01",
    title: "京阪神の学生限定",
    description: "参加者を京都大学・大阪大学・神戸大学の学生に限定。同じような志を持つ、レベルの高い仲間と出会える貴重な機会です。",
    icon: Users,
  },
  {
    number: "02",
    title: "厳選された超優良企業",
    description: "業界をリードするトップ企業のみを厳選して招待。一度に複数の優良企業と深く接点を持てる効率的なイベントです。",
    icon: Building2,
  },
  {
    number: "03",
    title: "早期内定に直結",
    description: "通常の選考ルートとは異なる、イベント参加者限定の特別選考パスを用意。効率的に就職活動を進めることができます。",
    icon: TrendingUp,
  }
];

const FeaturesSection = () => {
  // スマホ用カルーセルの設定
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-purple-50/50 to-white relative overflow-hidden">
      <div className="container mx-auto relative z-10 px-0 md:px-4">
        
        {/* ヘッダー部分 */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0B1E46] mb-4 leading-tight">
            本イベントが選ばれる<br />
            3つの理由
          </h2>
          <span className="text-purple-600 font-bold tracking-widest text-sm md:text-base uppercase">
            WHY OUR EVENT
          </span>
        </div>

        {/* メイン画像 */}
        <div className="w-full mb-12 md:mb-16">
            <img 
                src="/FeaturesSection-1.png" 
                alt="京阪神の大学風景とキャンパスライフ" 
                className="w-full h-auto object-cover"
            />
        </div>

        {/* ▼▼▼ PC版：これまでの縦並びレイアウト ▼▼▼ */}
        <div className="hidden md:flex flex-col gap-6 max-w-4xl mx-auto px-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 overflow-hidden"
            >
              <div className="absolute top-2 right-4 text-[120px] font-serif font-bold text-slate-50/80 pointer-events-none select-none leading-none z-0">
                {feature.number}
              </div>

              <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#0B1E46] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="pt-2">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-[#0B1E46] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* ▲▲▲ PC版 ここまで ▲▲▲ */}

        {/* ▼▼▼ スマホ版：スワイプ（カルーセル）レイアウト ▼▼▼ */}
        <div className="md:hidden w-full relative">
          <div className="overflow-hidden px-4" ref={emblaRef}>
            <div className="flex -ml-4">
              {features.map((feature, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 pl-4">
                  
                  <div className="h-full relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100 overflow-hidden">
                    {/* 背景の透かし数字 */}
                    <div className="absolute top-2 right-2 text-[100px] font-serif font-bold text-slate-50/80 pointer-events-none select-none leading-none z-0">
                      {feature.number}
                    </div>

                    <div className="relative z-10 flex flex-col gap-5 items-start">
                      {/* アイコン */}
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-[#0B1E46] rounded-2xl flex items-center justify-center shadow-md">
                          <feature.icon className="w-7 h-7 text-white" />
                        </div>
                      </div>

                      {/* テキスト */}
                      <div>
                        <h3 className="text-xl font-serif font-bold text-[#0B1E46] mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed font-medium text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* ドットインジケーター */}
          <div className="flex justify-center items-center gap-3 mt-6">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-[#B8860B] w-4" // 選択中はゴールド色で少し横長に
                    : "bg-slate-300"     // 未選択はグレー
                }`}
                aria-label={`スライド ${index + 1} へ移動`}
              />
            ))}
          </div>
        </div>
        {/* ▲▲▲ スマホ版 ここまで ▲▲▲ */}

      </div>
    </section>
  );
};

export default FeaturesSection;