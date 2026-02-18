import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "K.T.",
    university: "京都大学 経済学部",
    comment:
      "少人数だからこそ、社員の方と深い話ができました。ここでの出会いがきっかけで、志望企業が明確になりました。",
    rating: 5,
  },
  {
    name: "M.S.",
    university: "大阪大学 工学部",
    comment:
      "説明会では聞けないリアルな話を聞けて、企業研究が一気に進みました。参加者同士の交流も刺激になりました。",
    rating: 5,
  },
  {
    name: "Y.N.",
    university: "神戸大学 法学部",
    comment:
      "イベント後に特別選考の案内をいただき、早期内定につながりました。参加して本当に良かったです。",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="campaign" className="py-32 md:py-40 px-4 relative">
      {/* Subtle background variation */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 100% 50% at 50% 50%, hsl(220 45% 8%) 0%, transparent 70%)",
        }}
      />
      
      <div className="container max-w-4xl mx-auto relative z-10">
        <p className="section-subtitle">VOICE</p>
        <h2 className="section-title">
          参加者の<span className="gradient-text">声</span>
        </h2>
        
        <div className="divider-gold w-24 mx-auto mb-8" />
        
        <p className="text-center text-muted-foreground mb-16 leading-relaxed">
          過去の参加者からいただいた感想をご紹介します
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-premium relative group hover:glow-gold transition-all duration-500"
            >
              <Quote 
                className="absolute top-6 right-6 w-10 h-10 opacity-20"
                style={{ color: "hsl(45 60% 50%)" }}
              />
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span 
                    key={i} 
                    className="text-base"
                    style={{ color: "hsl(45 80% 55%)" }}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm leading-loose mb-6 text-foreground/90">
                {testimonial.comment}
              </p>
              <div className="divider-gold mb-5" />
              <div>
                <p className="font-bold text-sm text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {testimonial.university}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Campaign banner */}
        <div className="mt-20 card-premium glow-gold text-center relative overflow-hidden">
          {/* Shimmer effect overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              background: "linear-gradient(135deg, transparent 30%, hsl(45 80% 60%) 50%, transparent 70%)",
              backgroundSize: "200% 200%",
              animation: "shimmer-text 3s ease-in-out infinite",
            }}
          />
          
          <p 
            className="text-sm font-bold mb-4"
            style={{ color: "hsl(45 80% 60%)" }}
          >
            🎁 期間限定キャンペーン
          </p>
          <h3 className="text-2xl font-bold font-serif mb-4 text-foreground">
            早期エントリーで特別特典をプレゼント
          </h3>
          <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
            1月31日までにエントリーいただいた方には、
            <br className="hidden sm:block" />
            就活対策資料を無料でお送りします
          </p>
          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2 text-base"
          >
            今すぐエントリーする
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
