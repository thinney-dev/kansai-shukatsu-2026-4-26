import { useState, useEffect, useCallback } from "react";
import { Gift, Users } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const CampaignSection = () => {
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


  // ▼▼▼ カード1（来場特典）の要素 ▼▼▼
  const card1 = (
    <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#0B1E46]/5 hover:border-[#0B1E46]/20 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      {/* 上部ラベル */}
      <div className="bg-[#0B1E46] text-white text-center py-3 font-bold text-lg relative overflow-hidden">
        <span className="relative z-10 flex items-center justify-center gap-2">
          <Gift className="w-5 h-5 text-[#C5A059]" />
          特典 01
        </span>
        <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-[-20deg] animate-[shimmer_3s_infinite]" />
      </div>

      <div className="p-6 md:p-8 text-center flex flex-col items-center flex-1">
        <h3 className="text-xl font-bold text-[#0B1E46] mb-2">
          イベント参加＆アンケート回答で
        </h3>
        <p className="text-sm text-slate-500 mb-6 font-medium bg-slate-100 px-3 py-1 rounded-full">
          来場者全員が対象
        </p>

        <div className="mb-6 relative">
          <p className="text-sm font-bold text-[#0B1E46] mb-1">Amazonギフト券</p>
          <div className="text-5xl md:text-6xl font-serif font-bold text-[#C5A059] drop-shadow-sm tracking-tight">
            1,000<span className="text-2xl md:text-3xl ml-1 text-[#0B1E46]">円分</span>
          </div>
          <div className="mt-2 text-xl font-bold text-[#0B1E46]">
            プレゼント！
          </div>
        </div>

        <div className="mt-auto w-full">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-500 text-left">
              <p>※イベント終了後のアンケート回答と引き換えにお渡しします。</p>
            </div>
        </div>
      </div>
    </div>
  );

  // ▼▼▼ カード2（友人紹介）の要素 ▼▼▼
  const card2 = (
    <div className="group relative bg-[#0B1E46] rounded-2xl shadow-xl overflow-hidden border-2 border-[#C5A059] transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      {/* 上部ラベル */}
      <div className="bg-[#C5A059] text-white text-center py-3 font-bold text-lg shadow-md">
          <span className="flex items-center justify-center gap-2">
          <Users className="w-5 h-5 text-white" />
          特典 02
          </span>
      </div>

      <div className="p-6 md:p-8 text-center flex flex-col items-center flex-1 text-white">
        <h3 className="text-xl font-bold text-white mb-2">
          ご友人と一緒の参加で
        </h3>
        <p className="text-sm text-[#0B1E46] mb-6 font-bold bg-[#C5A059] px-4 py-1 rounded-full shadow-lg">
          あなたとご友人の【双方】に
        </p>

        <div className="mb-6">
          <p className="text-sm font-bold text-slate-300 mb-1">追加でAmazonギフト券</p>
          
          <div className="flex items-end justify-center gap-1 mb-2">
              <span className="text-lg font-bold mb-2">紹介数 ×</span>
              <span className="text-5xl md:text-6xl font-serif font-bold text-[#C5A059] drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
              1,000
              </span>
              <span className="text-2xl md:text-3xl mb-1">円分</span>
          </div>
          
          <div className="text-xl font-bold text-white">
            プレゼント！
          </div>
        </div>

        <div className="mt-auto w-full">
            <div className="bg-white/10 border border-white/20 rounded-lg p-3 text-center">
              <p className="text-[#C5A059] font-bold text-lg mb-1">最大5名(5,000円)まで</p>
              <p className="text-xs text-slate-300">
                  例：3人紹介で合計4,000円分GET<br/>
                  (参加1,000円 + 紹介3,000円)
              </p>
            </div>
        </div>
      </div>
    </div>
  );


  return (
    <section id="campaign" className="py-20 px-4 md:px-8 bg-slate-50 relative overflow-hidden">
      
      {/* 背景装飾（薄いグラデーション） */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-xl mx-auto relative z-10">
        
        {/* ヘッダー */}
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#0B1E46] mb-2 tracking-wide">
             特別キャンペーン
           </h2>
           <p className="text-[#B8860B] font-serif italic text-sm tracking-widest uppercase mb-6">
             SPECIAL OFFERS
           </p>
           <p className="text-base md:text-lg font-bold text-[#0B1E46] mb-2">
             条件達成でAmazonギフト券をプレゼント！
           </p>
        </div>


        {/* ▼▼▼ PC版：これまでの縦積みレイアウト ▼▼▼ */}
        <div className="hidden md:flex flex-col gap-8 w-full">
          {card1}
          {card2}
        </div>
        {/* ▲▲▲ PC版 ここまで ▲▲▲ */}


        {/* ▼▼▼ スマホ版：スワイプ（カルーセル）レイアウト ▼▼▼ */}
        <div className="md:hidden w-full relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              
              {/* スライド1 */}
              <div className="flex-[0_0_100%] min-w-0 pl-4">
                {card1}
              </div>
              
              {/* スライド2 */}
              <div className="flex-[0_0_100%] min-w-0 pl-4">
                {card2}
              </div>

            </div>
          </div>

          {/* ドットインジケーター */}
          <div className="flex justify-center items-center gap-3 mt-6">
            {[0, 1].map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-[#B8860B] w-4" // 選択中はゴールド色で横長
                    : "bg-slate-300"     // 未選択はグレー
                }`}
                aria-label={`特典 ${index + 1} へ移動`}
              />
            ))}
          </div>
        </div>
        {/* ▲▲▲ スマホ版 ここまで ▲▲▲ */}


        {/* 注釈 */}
        <div className="mt-8 text-center">
            <p className="text-[10px] md:text-xs text-slate-400">
                ※本キャンペーンは予告なく変更・終了する場合がございます。予めご了承ください。<br />
                ※ギフト券の送付は、イベント参加確認後、後日メールにてお送りいたします。<br />
                ※5名以上紹介された場合も特典２は5,000円となります。
            </p>
        </div>

      </div>
    </section>
  );
};

export default CampaignSection;