import * as React from "react";
import { UserCheck, Ticket, MessageCircle, ChevronDown } from "lucide-react";

// ▼ 外部のAccordion部品を使わず、自作のシンプルなアコーディオンコンポーネントを作成 ▼
const SimpleAccordionItem = ({ benefit, isOpen, onClick }: { benefit: any, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className={`bg-slate-50 border-2 border-[#C5A059]/40 rounded-xl overflow-hidden transition-colors ${isOpen ? 'bg-amber-50/30' : ''}`}>
      <button 
        onClick={onClick}
        className="w-full px-4 py-4 flex items-center justify-between group text-left focus:outline-none"
      >
        <div className="flex items-center gap-4 w-full">
          {/* アイコン */}
          <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center shadow-md transition-colors duration-300 ${isOpen ? 'bg-[#C5A059]' : 'bg-[#0B1E46] group-hover:bg-[#C5A059]'}`}>
            <benefit.icon className={`w-6 h-6 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-[#C5A059] group-hover:text-white'}`} />
          </div>

          {/* タイトル＆ラベル */}
          <div className="flex flex-col flex-1 pr-4">
            <span className="text-[10px] font-bold text-white bg-[#C5A059] px-2 py-0.5 rounded-full w-fit mb-1">
              特典 {benefit.id}
            </span>
            <span className="text-base md:text-lg font-serif font-bold text-[#0B1E46]">
              {benefit.title}
            </span>
          </div>
        </div>
        
        {/* 開閉アイコン */}
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* アコーディオンの中身（開いている時だけ表示） */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 pb-4 pt-0 text-slate-600 font-medium pl-[4.5rem]">
          <div className="border-t border-[#C5A059]/20 pt-4 mt-1">
            <div className="text-sm md:text-base leading-relaxed">
              {benefit.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BenefitsSection = () => {
  // アコーディオンの開閉状態を管理するステート（最初は全部閉じておく）
  const [openId, setOpenId] = React.useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const benefits = [
    {
      id: 1,
      title: "不安を無くす事前個別面談",
      description: (
        <div className="space-y-4">
          <p className="leading-relaxed">
            本イベントは選考式となっているため、事前にオンラインでの面談を実施します。<br />
            面談は単なる選考ではなく、主催者とお話しすることで<strong>「就活における新しい発見」</strong>を得られる時間です。
          </p>
          
          {/* メリットを強調する枠 */}
          <div className="bg-white p-4 rounded-lg border border-[#C5A059]/30 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#C5A059]"></div>
            <p className="text-sm font-bold text-[#0B1E46] mb-1">💡 面談を受けるメリット</p>
            <p className="text-xs md:text-sm leading-relaxed text-slate-600">
              ヒアリングをもとに、知名度だけにとらわれない<strong>「あなたの志向性に本当に合った企業」</strong>をアドバイスします。事前に自分に合う企業を知ることで、当日は明確な目的意識を持って座談会に臨むことができます。
            </p>
          </div>

          {/* 面談概要を見やすく整理 */}
          <div className="bg-slate-100 p-4 rounded-lg text-xs md:text-sm text-slate-700">
            <p className="font-bold text-[#0B1E46] mb-2 border-b border-slate-300 pb-1">＜面談概要＞</p>
            <ul className="space-y-1 mb-3">
              <li><span className="font-bold text-[#0B1E46]">◆ 形式：</span> オンライン</li>
              <li><span className="font-bold text-[#0B1E46]">◆ 所要時間：</span> 15〜30分</li>
            </ul>
            <p className="font-bold text-[#0B1E46] mb-1">◆ 内容：</p>
            <ul className="space-y-2 pl-2">
              <li>
                <span className="text-slate-500 text-[10px] mr-1">▼</span><strong className="text-[#0B1E46]">説明（5分程度）</strong>
                <p className="pl-4 mt-0.5 text-slate-600">・今回のイベント内容<br/>・弊社の紹介（初めて面談する方のみ）</p>
              </li>
              <li>
                <span className="text-slate-500 text-[10px] mr-1">▼</span><strong className="text-[#0B1E46]">ヒアリング（7分程度）</strong>
                <p className="pl-4 mt-0.5 text-slate-600">・イベント参加の背景・目的<br/>・興味ある業界・職種等</p>
              </li>
              <li>
                <span className="text-slate-500 text-[10px] mr-1">▼</span><strong className="text-[#0B1E46]">事務連絡（3分程度）</strong>
              </li>
            </ul>
          </div>
        </div>
      ),
      icon: UserCheck
    },
    {
      id: 2,
      title: "あなただけの特別推薦カード",
      description: "超優良企業から選考直結の早期特別ルートを勝ち取ろう！（企業様が気になった学生に対して、特別ルートへ招待するオファーカードを渡す仕組みです）",
      icon: Ticket
    },
    {
      id: 3,
      title: "興味を持った企業様との１on１面談",
      description: "座談会でアピールできた学生に対して、企業様から個人面談申請をイベント中に送ります。",
      icon: MessageCircle
    },
  ];

  // ▼ 画像一覧（Carouselコンポーネントを使わず、CSSアニメーションで横スクロールを実装） ▼
  const baseImages = [ "/gift-2.png", "/gift-3.png" ];
  // ループが途切れないように画像をたくさん複製
  const scrollingImages = [...baseImages, ...baseImages, ...baseImages, ...baseImages]; 

  return (
    <section className="py-16 px-4 md:px-8 bg-white relative overflow-hidden">
      
      {/* 背景の装飾 */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* セクションタイトル */}
        <div className="text-center mb-10">
           <h2 className="text-2xl md:text-3xl font-serif font-medium text-[#0B1E46] mb-3 tracking-wide">
             参加者限定 特別ルート
           </h2>
           <p className="text-[#B8860B] font-serif italic text-xs tracking-widest uppercase mb-8">Special Route</p>
           
           <p className="text-sm md:text-base font-bold text-[#0B1E46] mb-3 leading-relaxed">
             <span className="inline-block">本気で就活に向き合う</span><span className="inline-block">あなたを支援します。</span>
           </p>

           {/* ▼ CSSアニメーションによる無限スクロール画像（エラーの元だったCarouselを排除） ▼ */}
           <div className="w-full mb-8 relative group">
             {/* 左右のフェードエフェクト */}
             <div className="absolute top-0 left-0 w-8 md:w-16 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
             <div className="absolute top-0 right-0 w-8 md:w-16 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
             
             {/* スクロールコンテナ */}
             <div className="flex overflow-hidden">
               {/* 1つ目のスライドグループ */}
               <div className="flex animate-[scroll_20s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap">
                 {scrollingImages.map((src, index) => (
                   <div key={`first-${index}`} className="w-[280px] md:w-[350px] shrink-0 px-2">
                     <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-100 shadow-sm">
                       <img
                         src={src}
                         alt={`特典イメージ`}
                         className="object-cover w-full h-full"
                         onError={(e) => {
                           e.currentTarget.src = `https://placehold.co/600x338/f8fafc/475569?text=Gift+Image`;
                         }}
                       />
                     </div>
                   </div>
                 ))}
               </div>
               {/* 2つ目のスライドグループ（ループを滑らかに繋ぐため） */}
               <div className="flex animate-[scroll_20s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap" aria-hidden="true">
                 {scrollingImages.map((src, index) => (
                   <div key={`second-${index}`} className="w-[280px] md:w-[350px] shrink-0 px-2">
                     <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-100 shadow-sm">
                       <img
                         src={src}
                         alt={`特典イメージ`}
                         className="object-cover w-full h-full"
                         onError={(e) => {
                           e.currentTarget.src = `https://placehold.co/600x338/f8fafc/475569?text=Gift+Image`;
                         }}
                       />
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           </div>

           <p className="text-[11px] md:text-xs font-bold text-slate-400">
             ▼ クリックして詳細を確認できます
           </p>
        </div>

        {/* アコーディオンリスト（自作コンポーネントを使用） */}
        <div className="space-y-4">
          {benefits.map((benefit: any) => (
            <SimpleAccordionItem 
              key={benefit.id} 
              benefit={benefit} 
              isOpen={openId === benefit.id}
              onClick={() => toggleAccordion(benefit.id)}
            />
          ))}
        </div>

      </div>

      {/* スクロールアニメーション用のCSS（JSX内に定義） */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}} />
    </section>
  );
};

export default BenefitsSection;