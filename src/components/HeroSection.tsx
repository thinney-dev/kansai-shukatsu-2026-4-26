import { useState, useEffect } from "react";
import { ChevronRight, Users, MapPin, Ticket, CalendarClock } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const images = [
  "/Herosection-4.png",
  "/Herosection-1.png",
  "/Herosection-2.png"
];

const HeroSection = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);

  return (
    <section className="relative w-full pt-6 pb-16 overflow-hidden bg-transparent">
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        
        {/* 画像バナー */}
        <div className="w-full flex justify-center mb-3 animate-in fade-in slide-in-from-top-4 duration-700">
            <img
            src="/LP_header_28.png"
            alt="28卒限定"
            className="w-[60%] h-auto object-contain"
            />
        </div>

        
        {/* ヘッダーテキスト部分 */}
        <div className="mb-12 md:mb-16 flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-700 w-full">
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0B1E46] leading-tight mb-5 drop-shadow-sm">
            質の高い就活を
          </h1>
          
          <div className="mt-1 w-full flex justify-center">
            <p className="text-[11px] sm:text-sm md:text-lg font-serif text-[#0B1E46] tracking-[0.1em] font-medium opacity-90 whitespace-nowrap">
              少人数だからこそ、優良企業と深く話せる座談会
            </p>
          </div>

          {/* 日付表示 */}
          <div className="mt-10 md:mt-16 flex justify-center w-full animate-in fade-in zoom-in duration-1000 delay-200">
             <div className="inline-flex items-center gap-2 md:gap-3">
                <CalendarClock className="w-6 h-6 md:w-8 md:h-8 text-[#B8860B] drop-shadow-sm" />
                <span className="text-2xl md:text-3xl font-serif font-bold text-[#0B1E46] tracking-widest drop-shadow-sm">
                   4/26<span className="text-lg md:text-xl mx-1 text-[#0B1E46] opacity-80">(土)</span>13:45~
                </span>
             </div>
          </div>

          {/* 場所表示 */}
          <div className="mt-2 flex justify-center w-full animate-in fade-in zoom-in duration-1000 delay-300">
             <div className="inline-flex items-center gap-2">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#B8860B] drop-shadow-sm" />
                <span className="text-lg md:text-xl font-serif font-bold text-[#0B1E46] tracking-wider drop-shadow-sm">
                AP大阪茶屋町 ルームH・I
                </span>
             </div>
          </div>

          {/* デロイト参戦テキスト */}
          <div className="mt-3 md:mt-4 flex flex-col items-center w-full animate-in fade-in zoom-in duration-1000 delay-400">
             <p className="text-base md:text-xl font-serif font-bold text-[#0B1E46] tracking-wide leading-tight drop-shadow-sm flex flex-wrap items-baseline justify-center gap-1">
                <span></span>
                <span className="text-[#B8860B] text-lg md:text-2xl mx-1">超有名企業</span>
                <span>参加決定</span>
             </p>
          </div>

        </div>


        {/* ▼▼▼ 修正：企業ロゴ（白背景を画面幅いっぱいにし、画像が見切れないよう配置） ▼▼▼ */}
        <div className="w-screen md:w-full max-w-5xl mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 bg-white py-6 md:py-10 md:rounded-2xl border-y md:border border-slate-200/80 shadow-sm flex justify-center items-center">
             <img
               src="/logos_s.png"
               alt="Participating Companies"
               /* 画像の左右に余白(px-4)を持たせ、画面端で途切れるのを完全に防ぎます */
               className="w-full max-w-4xl h-auto object-contain px-4 sm:px-6 md:px-8 mix-blend-multiply"
             />
        </div>
        {/* ▲▲▲ 修正ここまで ▲▲▲ */}


        {/* 写真エリアに目立たない枠を追加 */}
        <div className="relative w-full max-w-4xl mx-auto mb-10 shadow-2xl overflow-hidden border border-slate-200/60 rounded-xl">
          
          {/* カルーセル */}
          <div className="overflow-hidden bg-slate-100 aspect-[16/9]" ref={emblaRef}>
            <div className="flex h-full">
              {images.map((src, index) => (
                <div className="flex-[0_0_100%] min-w-0 relative h-full" key={index}>
                  <img
                    src={src}
                    alt={`Career Summit Scene ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* イベントの特徴（3つの丸） */}
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-3 md:gap-4 mb-12 w-full max-w-4xl px-2">
          
          {/* Limit */}
          <div className="flex-1 min-w-[140px] max-w-[240px] flex items-center bg-white border border-[#B8860B]/30 rounded-full px-3 py-2 shadow-sm whitespace-nowrap justify-center">
             <div className="w-8 h-8 rounded-full bg-[#0B1E46] flex items-center justify-center mr-2 text-white shrink-0">
                <Users size={14} />
             </div>
             <div className="text-left">
                <p className="text-[9px] text-slate-400 font-bold tracking-widest uppercase">LIMIT</p>
                <p className="text-sm font-bold text-[#0B1E46]">30名限定</p>
             </div>
          </div>

          {/* Target */}
          <div className="flex-1 min-w-[140px] max-w-[240px] flex items-center bg-white border border-[#B8860B]/30 rounded-full px-3 py-2 shadow-sm whitespace-nowrap justify-center">
             <div className="w-8 h-8 rounded-full bg-[#0B1E46] flex items-center justify-center mr-2 text-white shrink-0">
                <Ticket size={14} />
             </div>
             <div className="text-left">
                <p className="text-[9px] text-slate-400 font-bold tracking-widest uppercase">STYLE</p>
                <p className="text-sm font-bold text-[#0B1E46]">招待制</p>
             </div>
          </div>

          {/* Style */}
          <div className="flex-1 min-w-[140px] max-w-[240px] flex items-center bg-white border border-[#B8860B]/30 rounded-full px-3 py-2 shadow-sm whitespace-nowrap justify-center">
             <div className="w-8 h-8 rounded-full bg-[#0B1E46] flex items-center justify-center mr-2 text-white shrink-0">
                <MapPin size={14} />
          
             </div>
             <div className="text-left">
                <p className="text-[9px] text-slate-400 font-bold tracking-widest uppercase">TARGET</p>
                <p className="text-sm font-bold text-[#0B1E46]">京大・阪大・神大生</p>
             </div>
          </div>
        </div>


        {/* 3つの特権リスト */}
        <div className="w-full max-w-[480px] mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 px-2 md:px-0">
          
          {/* 見出し */}
          <div className="flex items-center justify-center gap-4 mb-4">
             <div className="h-[1px] w-8 md:w-12 bg-[#B8860B]/40"></div>
             <h3 className="text-lg md:text-xl font-serif font-bold text-[#B8860B] tracking-wider whitespace-nowrap">
               ▼ 参加者だけの「3つの特権」 ▼
             </h3>
             <div className="h-[1px] w-8 md:w-12 bg-[#B8860B]/40"></div>
          </div>

          {/* リスト部分 */}
          <div className="flex flex-col space-y-3 px-2 md:px-4">
               
               {/* Item 1 */}
               <div className="flex items-baseline border-b border-slate-200/60 pb-2">
                 <span className="font-serif italic text-2xl md:text-3xl text-slate-300 mr-3 md:mr-5 font-light w-6 md:w-8 text-right shrink-0">1.</span>
                 <span className="text-lg md:text-xl font-bold text-[#0B1E46] tracking-wide font-sans text-left leading-tight">
                    京阪神大生を採用したい企業だけ
                 </span>
               </div>

               {/* Item 2 */}
               <div className="flex items-start border-b border-slate-200/60 pb-2">
                 <span className="font-serif italic text-2xl md:text-3xl text-slate-300 mr-3 md:mr-5 font-light w-6 md:w-8 text-right shrink-0 leading-none mt-1">2.</span>
                 
                 <div className="flex items-center w-full">
                    <p className="text-lg md:text-xl font-bold text-[#0B1E46] tracking-wide font-sans text-left leading-tight flex-1">
                        ４大外資コンサル認定団体への参加券獲得
                    </p>
                    
                    <span className="ml-3 text-[10px] md:text-[11px] font-bold text-white bg-[#B8860B] px-3 py-1 rounded-full shadow-sm tracking-wide whitespace-nowrap shrink-0">
                        無料
                    </span>
                 </div>
               </div>

               {/* Item 3 */}
               <div className="flex items-baseline pt-1">
                 <span className="font-serif italic text-2xl md:text-3xl text-slate-300 mr-3 md:mr-5 font-light w-6 md:w-8 text-right shrink-0">3.</span>
                 <span className="text-lg md:text-xl font-bold text-[#0B1E46] tracking-wide font-sans text-left leading-tight">
                    経営幹部候補生として入社可能
                 </span>
               </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;