const Header = () => {
  return (
  <header className="w-full bg-white pt-6 pb-4">
  {/* 28卒限定 画像バナー */}
  <div className="w-full flex justify-center">
  <img
  src="/LP_header_28.png"
  alt="28卒限定"
  // ▼▼▼ 修正箇所：サイズを大きく変更 ▼▼▼
  // h-12(48px) → h-20(80px) : スマホ版
  // md:h-16(64px) → md:h-32(128px) : PC版
  className="h-20 md:h-32 w-auto object-contain"
  />
  </div>
  </header>
  );
  };
  
  export default Header;