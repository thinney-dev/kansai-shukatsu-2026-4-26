const CompaniesSection = () => {
  const companies = [
    
    { 
      id: 1, 
      name: "デロイトトーマツ", 
      tags: ["コンサル", "外資系"], 
      logoImage: "/logo-Deloitte.png",
      url: "https://www.deloitte.com/jp/ja/about/group/deloitte-tohmatsu-llc.html" 
    },
    { 
      id: 2, 
      name: "シンプレクス", 
      tags: ["ITコンサル"], 
      logoImage: "/logo-Simplex.png",
      url: "https://www.simplex.inc/" 
    },
    
    { 
      id: 3, 
      name: "ナハト", 
      tags: ["マーケティング", ], 
      logoImage: "/logo-ナハト.png",
      url: "https://nahato.co.jp/"
    },
    { 
      id: 4, 
      name: "RACE", 
      tags: ["経営コンサル"], 
      logoImage: "/logo-RACE.png",
      url: "https://www.race.co.jp/"
    },
    { 
      id: 5, 
      name: "NES", 
      tags: ["VC・支援"], 
      logoImage: "/logo-NES.png",
      url: "https://nes-net.jp/"
    },
    
    { 
      id: 6, 
      name: "社名 6", 
      tags: ["業界", "タグ"], 
      logoText: "Coming soon",
      url: "#" 
    },
  ];

  return (
    <section className="py-12 px-6 md:px-10 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        
        {/* ヘッダーエリア */}
        <div className="text-center mb-12">
           
           <div className="mb-6">
             <h2 className="text-2xl md:text-3xl font-serif font-medium text-[#0B1E46] mb-3 tracking-wide">
               出展企業
             </h2>
             <p className="text-[#B8860B] font-serif italic text-xs tracking-widest uppercase">
               COMPANIES
             </p>
           </div>
           
           <p className="text-sm font-bold text-slate-500 mb-6">
             タップすると各企業HPへ遷移します
           </p>

           <p className="text-sm md:text-base font-bold text-[#0B1E46] leading-loose tracking-tight">
             <span className="inline-block whitespace-nowrap">業界最大手から、超優良企業、スタートアップまで</span>
             <br />
             <span className="inline-block whitespace-nowrap">幅広い企業が出展</span>
           </p>
        </div>

        {/* 企業ロゴカード一覧 */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {companies.map((company: any) => (
            <a
              key={company.id} 
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              // ▼▼▼ 修正: aspect-squareを維持しつつ、中身のレイアウト制御を強化
              className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow aspect-square w-full cursor-pointer group block overflow-hidden"
            >
              {/* ▼▼▼ 修正: ロゴコンテナ (min-h-0 が重要：flexアイテムが親枠を超えないようにする) */}
              <div className="flex-1 w-full flex items-center justify-center min-h-0 mb-2 px-2">
                {company.logoImage ? (
                  <img 
                    src={company.logoImage} 
                    alt={`${company.name} ロゴ`}
                    // ▼▼▼ 修正: max-h-32 を廃止し、親枠に合わせて自動調整(object-contain)
                    className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity" 
                  />
                ) : (
                  <span className="font-black text-3xl text-slate-300 group-hover:text-slate-400 transition-colors">
                    {company.logoText}
                  </span>
                )}
              </div>
              
              {/* 下部情報エリア (高さを固定したくないが、縮まないように shrink-0) */}
              <div className="w-full space-y-2 text-center shrink-0">
                 <div className="flex justify-center gap-1 w-full px-1">
                    {company.tags.map((tag: string, i: number) => (
                        <span key={i} className="text-[10px] px-1.5 py-0.5 border border-slate-200 rounded bg-slate-50 text-slate-500 font-bold whitespace-nowrap flex-shrink-0 truncate max-w-[100px]">
                            {tag}
                        </span>
                    ))}
                 </div>
                 <p className="text-xs font-bold text-slate-400 mt-1 truncate w-full">
                    {company.name}
                 </p>
              </div>
            </a>
          ))}
        </div>

        <p className="text-[10px] text-slate-400 text-center font-medium">
            ＊参加企業は変更になる可能性があります。
        </p>

      </div>
    </section>
  );
};

export default CompaniesSection;