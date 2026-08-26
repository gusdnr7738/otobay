import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { BikeCard } from "../components/BikeCard";
import motorcycleSketch from "../assets/motorcycle-sketch.png";
import { bikes, categories } from "../data/bikes";
import type { BikeCategory } from "../types/bike";
import { cx } from "../utils";

const itemsPerPage = 9;

export function ListPage() {
  const [category, setCategory] = useState<BikeCategory>("전체");
  const [currentPage, setCurrentPage] = useState(1);

  const visibleBikes = useMemo(() => {
    if (category === "전체") return bikes;
    return bikes.filter((bike) => bike.category === category);
  }, [category]);

  const totalPages = Math.max(1, Math.ceil(visibleBikes.length / itemsPerPage));
  const pageNumbers = useMemo(
    () => Array.from({ length: totalPages }, (_, index) => index + 1),
    [totalPages],
  );
  const pagedBikes = useMemo(
    () =>
      visibleBikes.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
      ),
    [currentPage, visibleBikes],
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  return (
    <>
      <section className="relative overflow-hidden border-b border-zinc-200 px-9 py-8 dark:border-zinc-800 max-sm:px-5">
        <div className="mx-auto max-w-[1180px]">
          <div className="relative z-10">
            <h1 className="max-w-[420px] text-[30px] font-black leading-[1.28] text-zinc-950 dark:text-white max-sm:text-[26px]">
              믿을 수 있는
              <br />
              오토바이 거래,{" "}
              <span className="text-primary">바이크 꿀매 집합소</span>
            </h1>
            <p className="mt-4 text-[15px] font-medium text-zinc-600 dark:text-zinc-300">
              다양한 매물을 둘러보고 원하는 오토바이를 찾아보세요.
            </p>
          </div>
          <div className="absolute right-[max(40px,calc((100%-1180px)/2+40px))] top-3 h-[128px] w-[258px] opacity-70 dark:opacity-35 max-sm:right-0 max-sm:top-9 max-sm:w-[190px]">
            <img
              src={motorcycleSketch}
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="px-7 pb-8 pt-4 max-sm:px-4">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-4 flex items-center justify-between gap-3 max-sm:flex-col max-sm:items-stretch">
            <div className="flex flex-wrap gap-4 max-sm:gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={cx(
                    "h-8 rounded-full px-5 text-[14px] font-bold transition max-sm:px-4",
                    category === item
                      ? "bg-primary text-white shadow-[0_8px_18px_rgba(232,52,47,0.24)]"
                      : "text-zinc-700 hover:bg-zinc-100 hover:text-primary dark:text-zinc-300 dark:hover:bg-zinc-900",
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex h-9 min-w-[119px] cursor-default items-center justify-between rounded-md border border-zinc-200 bg-white px-4 text-[13px] font-bold text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white">
              최신등록순
              <ChevronDown className="size-4" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-x-4 gap-y-4 max-sm:grid-cols-1 sm:max-md:grid-cols-2">
            {pagedBikes.map((bike) => (
              <BikeCard key={bike.id} bike={bike} />
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-5 text-[13px] font-bold">
            <button
              type="button"
              aria-label="이전 페이지"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={currentPage === 1}
              className="grid size-8 place-items-center rounded-full transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-35 dark:hover:bg-zinc-900"
            >
              <ChevronLeft className="size-5" />
            </button>
            {pageNumbers.map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={cx(
                  "grid size-8 place-items-center rounded-full transition",
                  page === currentPage
                    ? "bg-primary text-white"
                    : "hover:bg-zinc-100 dark:hover:bg-zinc-900",
                )}
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              aria-label="다음 페이지"
              onClick={() =>
                setCurrentPage((page) => Math.min(totalPages, page + 1))
              }
              disabled={currentPage === totalPages}
              className="grid size-8 place-items-center rounded-full transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-35 dark:hover:bg-zinc-900"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
