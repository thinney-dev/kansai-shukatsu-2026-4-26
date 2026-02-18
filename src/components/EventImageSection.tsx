const EventImageSection = () => {
  return (
    <section className="py-32 md:py-40 px-4">
      <div className="container max-w-4xl mx-auto">
        <p className="section-subtitle">EVENT SCENE</p>
        <h2 className="section-title">
          開催<span className="gradient-text">イメージ</span>
        </h2>
        
        <div className="divider-gold w-24 mx-auto mb-16" />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* Placeholder images with glass effect */}
          <div className="aspect-[4/3] glass-container flex items-center justify-center overflow-hidden group hover:glow-gold transition-all duration-500">
            <div className="text-center p-6">
              <div 
                className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, hsl(220 40% 15% / 0.6) 0%, hsl(220 35% 10% / 0.4) 100%)",
                  border: "1px solid hsl(45 50% 50% / 0.15)",
                }}
              >
                <span className="text-3xl">👥</span>
              </div>
              <p className="text-sm text-muted-foreground">座談会の様子</p>
            </div>
          </div>
          
          <div className="aspect-[4/3] glass-container flex items-center justify-center overflow-hidden group hover:glow-gold transition-all duration-500">
            <div className="text-center p-6">
              <div 
                className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, hsl(220 40% 15% / 0.6) 0%, hsl(220 35% 10% / 0.4) 100%)",
                  border: "1px solid hsl(45 50% 50% / 0.15)",
                }}
              >
                <span className="text-3xl">💼</span>
              </div>
              <p className="text-sm text-muted-foreground">企業ブース</p>
            </div>
          </div>
          
          <div className="aspect-[4/3] glass-container flex items-center justify-center overflow-hidden col-span-2 md:col-span-1 group hover:glow-gold transition-all duration-500">
            <div className="text-center p-6">
              <div 
                className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, hsl(220 40% 15% / 0.6) 0%, hsl(220 35% 10% / 0.4) 100%)",
                  border: "1px solid hsl(45 50% 50% / 0.15)",
                }}
              >
                <span className="text-3xl">🎤</span>
              </div>
              <p className="text-sm text-muted-foreground">プレゼンテーション</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventImageSection;
