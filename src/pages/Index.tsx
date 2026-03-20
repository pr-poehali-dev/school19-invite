import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "MessageCircle",
    title: "Говори свободно",
    desc: "Делись мыслями, задавай вопросы и обсуждай всё, что важно — анонимно или открыто.",
  },
  {
    icon: "Users",
    title: "Будь в теме",
    desc: "Узнавай новости школы первым: расписание, события, важные объявления.",
  },
  {
    icon: "Heart",
    title: "Своя атмосфера",
    desc: "Здесь только ученики СОШ №19. Никаких посторонних — только свои.",
  },
];

export default function Index() {
  return (
    <main className="font-golos min-h-screen bg-white text-[#0d0d0d] selection:bg-[#0d0d0d] selection:text-white">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-white/90 backdrop-blur-sm border-b border-[#e8e8e8]">
        <span className="text-sm font-semibold tracking-widest uppercase text-[#0d0d0d]">
          СОШ №19 · Сочи
        </span>
        <a
          href="https://vk.com/school19sochi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[#0d0d0d] border border-[#0d0d0d] px-5 py-2 rounded-full transition-all duration-300 hover:bg-[#0d0d0d] hover:text-white"
        >
          Вступить
        </a>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(13,13,13,0.04) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative max-w-3xl mx-auto">
          <p className="opacity-0 animate-fade-up text-xs font-semibold tracking-[0.25em] uppercase text-[#888] mb-8">
            МОБУ СОШ №19 г. Сочи
          </p>

          <h1 className="opacity-0 animate-fade-up-slow text-[clamp(2.8rem,8vw,6rem)] font-black leading-[1.05] tracking-tight mb-8">
            Подслушано
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">в нашей школе</span>
              <span
                className="absolute bottom-1 left-0 right-0 h-[6px] bg-[#0d0d0d] rounded-full origin-left"
                style={{ animation: "line-grow 0.8s ease-out 0.8s forwards", opacity: 0 }}
              />
            </span>
          </h1>

          <p className="opacity-0 animate-fade-up-slower text-[clamp(1rem,2.5vw,1.25rem)] text-[#555] leading-relaxed max-w-xl mx-auto mb-12">
            Анонимное сообщество учеников СОШ №19 ВКонтакте. Говори о том, что
            волнует — без лишних слов.
          </p>

          <div className="opacity-0 animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://vk.com/school19sochi"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#0d0d0d] text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/20"
            >
              <Icon name="ExternalLink" size={18} />
              Открыть сообщество
            </a>
            <a
              href="#why"
              className="inline-flex items-center gap-2 text-[#555] font-medium text-sm transition-colors hover:text-[#0d0d0d]"
            >
              Узнать подробнее
              <Icon name="ArrowDown" size={16} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-12 bg-[#0d0d0d] animate-pulse" />
        </div>
      </section>

      {/* Features */}
      <section id="why" className="py-24 px-6 border-t border-[#e8e8e8]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#888] mb-4 text-center">
            Почему здесь
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-center mb-16 leading-tight">
            Место, где тебя услышат
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e8e8e8]">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white p-10 group transition-all duration-300 hover:bg-[#fafafa]"
              >
                <div className="mb-6 w-12 h-12 rounded-2xl bg-[#f2f2f2] flex items-center justify-center transition-all duration-300 group-hover:bg-[#0d0d0d] group-hover:scale-110">
                  <Icon
                    name={f.icon as "MessageCircle"}
                    size={22}
                    className="text-[#0d0d0d] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-[#666] leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-[#0d0d0d] text-white rounded-3xl px-10 py-16 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative z-10">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/50 mb-4">
              Уже ждут тебя
            </p>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black mb-4 leading-tight">
              Ты ещё не с нами?
            </h2>
            <p className="text-white/60 mb-10 max-w-md mx-auto">
              Вступи в сообщество и стань частью школьной жизни СОШ №19
            </p>
            <a
              href="https://vk.com/school19sochi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#0d0d0d] font-bold px-10 py-4 rounded-full text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/40"
            >
              <Icon name="ExternalLink" size={18} />
              Вступить ВКонтакте
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e8e8e8] py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#aaa]">
          <span>МОБУ СОШ №19 · г. Сочи</span>
          <a
            href="https://vk.com/school19sochi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#aaa] hover:text-[#0d0d0d] transition-colors"
          >
            <Icon name="ExternalLink" size={14} />
            vk.com/school19sochi
          </a>
        </div>
      </footer>
    </main>
  );
}
