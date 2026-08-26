import { Instagram } from "lucide-react";
import { NavLink } from "react-router-dom";
import naverBlogLogo from "../assets/naver-blog.png";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-100 px-2 py-1 text-dark transition-colors dark:bg-zinc-950 dark:text-zinc-50 sm:px-3">
      <div className="min-h-[calc(100vh-8px)] w-full overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-soft dark:border-zinc-800 dark:bg-zinc-950">
        <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white/95 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/92">
          <div className="flex h-[52px] items-center justify-between px-7 max-sm:px-4">
            <NavLink to="/" aria-label="바이크 꿀매 집합소  홈">
              <Logo />
            </NavLink>
            {/*
            <nav className="hidden h-full items-center gap-11 text-[12px] font-bold md:flex">
              {navItems.map((item, index) => (
                <NavLink
                  key={item}
                  to="/"
                  className={({ isActive }) =>
                    [
                      'relative flex h-full items-center transition hover:text-primary',
                      (isActive && index === 1) || index === 1 ? 'text-primary' : 'text-zinc-900 dark:text-zinc-100',
                    ].join(' ')
                  }
                >
                  {item}
                  {index === 1 && <span className="absolute -bottom-px left-1/2 h-0.5 w-6 -translate-x-1/2 bg-primary" />}
                </NavLink>
              ))}
            </nav>
            */}
            <div className="flex items-center gap-3">
              {/*
              <button
                aria-label="검색"
                className="hidden text-dark transition hover:text-primary dark:text-white sm:block"
              >
                <Search className="size-6" strokeWidth={2.2} />
              </button>
              */}
              <ThemeToggle />
              {/*
              <button
                aria-label="마이페이지"
                className="hidden text-dark transition hover:text-primary dark:text-white sm:block"
              >
                <UserRound className="size-6" strokeWidth={2.1} />
              </button>
              <button
                aria-label="메뉴"
                className="text-dark dark:text-white md:hidden"
              >
                <Menu className="size-6" />
              </button>
              */}
            </div>
          </div>
        </header>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-dark px-8 pb-5 pt-5 text-white dark:bg-black max-sm:px-5">
      <div className="flex items-start justify-between gap-7 max-sm:flex-col">
        <div>
          <Logo />
          <p className="mt-3 text-[14px] text-zinc-400">
            정현욱 판매 바이크 꿀매 집합소
          </p>
        </div>
        <div className="ml-auto border-l border-white/15 pl-10 pr-2 text-[18px] max-sm:ml-0 max-sm:border-l-0 max-sm:pl-0">
          <h3 className="font-bold text-white">SNS</h3>
          <div className="mt-4 flex gap-5">
            {/*
            <a
              href="https://www.instagram.com/uuuukkkk_04/"
              target="_blank"
              rel="noreferrer"
              aria-label="정현욱 Instagram"
              className="grid size-7 place-items-center rounded-md text-white transition hover:-translate-y-0.5 hover:text-primary"
            >
              <Instagram className="size-6" strokeWidth={2.2} />
            </a>
            */}
            
            <a
              href="https://www.youtube.com/@꿀매집합소정과장"
              target="_blank"
              rel="noreferrer"
              aria-label="정현욱 YouTube"
              className="grid h-7 w-9 place-items-center transition hover:-translate-y-0.5"
            >
              <svg
                viewBox="0 0 90 64"
                aria-hidden="true"
                className="h-7 w-9"
                fill="none"
              >
                <rect width="90" height="64" rx="16" fill="#FF0000" />
                <path d="M37 20L61 32L37 44V20Z" fill="white" />
              </svg>
            </a>
            <a
              href="https://m.blog.naver.com/gusdnr7738"
              target="_blank"
              rel="noreferrer"
              aria-label="정현욱 Naver Blog"
              className="grid h-7 w-9 place-items-center transition hover:-translate-y-0.5"
            >
              <img
                src={naverBlogLogo}
                alt=""
                className="h-7 w-9 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
      <p className="mt-7 text-[10px] text-zinc-500"></p>
    </footer>
  );
}
