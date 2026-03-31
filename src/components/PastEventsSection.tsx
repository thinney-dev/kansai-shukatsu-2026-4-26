import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import {
  X,
  ExternalLink,
  Building2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

const PastEventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
      const menuBtn = document.getElementById("mobile-menu-btn");
      if (menuBtn) {
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
      }
    };
  }, []);

  const openModal = (event: any) => {
    setSelectedEvent(event);
    document.body.style.overflow = "hidden";

    const menuBtn = document.getElementById("mobile-menu-btn");
    if (menuBtn) {
      menuBtn.style.opacity = "0";
      menuBtn.style.pointerEvents = "none";
    }
  };

  const closeModal = () => {
    setSelectedEvent(null);
    document.body.style.overflow = "unset";

    const menuBtn = document.getElementById("mobile-menu-btn");
    if (menuBtn) {
      menuBtn.style.opacity = "1";
      menuBtn.style.pointerEvents = "auto";
    }
  };

  const pastEvents = [
    {
      id: 1,
      date: "2026年3月28日(土)",
      title: "第1回 関西就活",
      autoImages: [
        "/past_3.28_top.png",
        "/past_3.28_1.png",
        "/past_3.28_2.png",
        "/past_3.28_3.png",
        "/past_3.28_4.png",
        "/past_3.28_5.png",
      ],
      images: [
        "/past_3.28_top.png",
        "/past_3.28_1.png",
        "/past_3.28_2.png",
        "/past_3.28_3.png",
        "/past_3.28_4.png",
        "/past_3.28_5.png",
      ],
      url: "https://career-summit-2026-3-28.pages.dev/",
      companies:
        "デロイト トーマツ ベンチャーサポート、DeNA、シンプレクス、ナハト、レイスグループ、株式会社NES",
      tags: ["満員御礼", "6社参加"],
    },
  ];

  return (
    <section
      id="past-events"
      className="py-16 px-4 md:px-8 bg-slate-50 relative"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-[#0B1E46] mb-3 tracking-wide">
              過去実績
            </h2>
            <p className="text-[#B8860B] font-serif italic text-xs tracking-widest uppercase">
              PAST EVENTS
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:gap-10">
          {pastEvents.map((event: any) => (
            <div
              key={event.id}
              className="rounded-2xl border border-slate-200 shadow-md w-full overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-300 relative aspect-video bg-slate-100"
              onClick={() => openModal(event)}
            >
              <div className="absolute inset-0 w-full h-full">
                <AutoImageSlider images={event.autoImages} title={event.title} />
              </div>

              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors pointer-events-none z-10"></div>

              <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20 flex items-center bg-white text-[#0B1E46] font-bold text-xs md:text-sm px-4 py-2.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] transform group-hover:scale-105 transition-all">
                当日の様子・詳細を見る <ChevronRight className="w-4 h-4 ml-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedEvent && typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
              style={{ zIndex: 9999 }}
              onClick={closeModal}
            >
              <div
                className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <EventImageSlider
                  images={selectedEvent.images}
                  title={selectedEvent.title}
                  closeModal={closeModal}
                />

                <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-white">
                  <div>
                    <p className="text-xs font-bold text-slate-500 mb-1">
                      {selectedEvent.date}
                    </p>
                    <h3 className="text-2xl font-bold text-[#0B1E46]">
                      {selectedEvent.title}
                    </h3>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-5 h-5 text-[#B8860B]" />
                      <h4 className="font-bold text-[#0B1E46] text-sm">
                        参加企業
                      </h4>
                    </div>
                    <p className="text-[13px] md:text-sm text-slate-600 leading-relaxed font-medium">
                      {selectedEvent.companies}
                    </p>
                  </div>
                </div>

                <div className="p-4 border-t border-slate-100 bg-slate-50">
                  <a
                    href={selectedEvent.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#0B1E46] hover:bg-slate-800 text-white py-3.5 rounded-xl font-bold text-sm transition-colors shadow-sm"
                  >
                    この時のイベント詳細（LP）を見る
                    <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
                  </a>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </section>
  );
};

const AutoImageSlider = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    watchDrag: false,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3500);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <div className="overflow-hidden h-full w-full pointer-events-none" ref={emblaRef}>
      <div className="flex h-full">
        {images.map((src: string, index: number) => (
          <div className="flex-[0_0_100%] min-w-0 relative h-full" key={index}>
            <img
              src={src}
              alt={`${title} 画像${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const EventImageSlider = ({
  images,
  title,
  closeModal,
}: {
  images: string[];
  title: string;
  closeModal: () => void;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (emblaApi) emblaApi.scrollPrev();
    },
    [emblaApi]
  );

  const scrollNext = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (emblaApi) emblaApi.scrollNext();
    },
    [emblaApi]
  );

  return (
    <div className="relative w-full h-56 md:h-64 bg-slate-100 overflow-hidden group">
      <button
        onClick={(e) => {
          e.stopPropagation();
          closeModal();
        }}
        className="absolute top-3 right-3 z-20 p-2 bg-black/40 text-white hover:bg-black/60 rounded-full transition-colors backdrop-blur-sm"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src: string, index: number) => (
            <div className="flex-[0_0_100%] min-w-0 relative h-full" key={index}>
              <img src={src} alt={`${title} 画像${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/30 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50 backdrop-blur-sm z-10"
          >
            <ChevronLeft className="w-5 h-5 pr-0.5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/30 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50 backdrop-blur-sm z-10"
          >
            <ChevronRight className="w-5 h-5 pl-0.5" />
          </button>

          <div className="absolute bottom-3 right-4 bg-black/40 px-2.5 py-1 rounded-full text-[10px] text-white font-bold tracking-widest backdrop-blur-sm z-10 pointer-events-none">
            Slide
          </div>
        </>
      )}
    </div>
  );
};

export default PastEventsSection;

