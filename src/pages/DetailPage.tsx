import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { bikes } from "../data/bikes";
import { formatPrice } from "../utils";

export function DetailPage() {
  const { bikeId } = useParams();
  const bike = bikes.find((item) => item.id === bikeId);
  const [activeIndex, setActiveIndex] = useState(0);

  const currentImage = useMemo(
    () => bike?.gallery[activeIndex] ?? bike?.image,
    [activeIndex, bike],
  );

  if (!bike) {
    return <Navigate to="/" replace />;
  }

  const moveImage = (step: number) => {
    setActiveIndex(
      (index) => (index + step + bike.gallery.length) % bike.gallery.length,
    );
  };

  return (
    <section className="px-8 pb-8 pt-7 max-sm:px-4">
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-2 text-[15px] font-bold text-zinc-800 transition hover:text-primary dark:text-zinc-100"
      >
        <ChevronLeft className="size-4" />
        목록으로 돌아가기
      </Link>

      <div className="grid grid-cols-[392px_1fr] gap-6 max-md:grid-cols-1">
        <div>
          <div className="relative overflow-hidden rounded-md bg-zinc-100 shadow-sm dark:bg-zinc-900">
            <img
              src={currentImage}
              alt={`${bike.name} 대표 사진`}
              className="aspect-[1.37] h-full w-full object-cover"
            />
            <button
              type="button"
              onClick={() => moveImage(-1)}
              aria-label="이전 이미지"
              className="absolute left-3 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-white/92 text-zinc-900 shadow transition hover:scale-105"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              type="button"
              onClick={() => moveImage(1)}
              aria-label="다음 이미지"
              className="absolute right-3 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-white/92 text-zinc-900 shadow transition hover:scale-105"
            >
              <ChevronRight className="size-6" />
            </button>
          </div>
          <div className="mt-3 grid grid-cols-5 gap-3">
            {bike.gallery.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`overflow-hidden rounded-md border-2 transition ${activeIndex === index ? "border-primary" : "border-transparent hover:border-zinc-300"}`}
              >
                <img
                  src={image}
                  alt={`${bike.name} 썸네일 ${index + 1}`}
                  className="aspect-[1.14] h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <aside className="pt-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-[26px] font-black leading-tight text-zinc-950 dark:text-white">
                {bike.name}
              </h1>
              <p className="mt-3 text-[17px] font-semibold text-zinc-700 dark:text-zinc-300">
                {bike.year}년식
              </p>
              <strong className="mt-2 block text-[26px] font-black text-primary">
                {formatPrice(bike.price)}
              </strong>
              <div className="mt-3 flex items-center gap-2 text-[15px] font-medium text-zinc-500 dark:text-zinc-400">
                <span>{bike.listedAt} 등록</span>
              </div>
            </div>
          </div>

          <dl className="mt-5 grid grid-cols-[96px_1fr] gap-y-[13px] border-t border-zinc-200 pt-5 text-[13px] dark:border-zinc-800">
            {bike.specs.map((spec) => (
              <div key={spec.label} className="contents">
                <dt className="font-semibold text-zinc-500 dark:text-zinc-400 text-[16px]">
                  {spec.label}
                </dt>
                <dd className="font-bold text-zinc-950 dark:text-white text-[16px]">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <section className="mt-8">
        <h2 className="text-[19px] font-black text-zinc-950 dark:text-white">
          상세 설명
        </h2>
        <div className="mt-3 space-y-1.5 text-[15px] font-medium leading-relaxed text-zinc-850 dark:text-zinc-200">
          {bike.description.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>

      <section className="mt-8 mb-5 flex items-center justify-between gap-4 rounded-md border border-zinc-200 bg-white px-7 py-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 max-sm:flex-col max-sm:items-stretch">
        <div className="flex items-center gap-4">
          <Phone className="size-8 text-primary" strokeWidth={2.4} />
          <div>
            <p className="text-[16px] font-black text-zinc-950 dark:text-white">
              판매자에게 전화하기
            </p>
            <p className="mt-1 text-[20px] font-black text-zinc-950 dark:text-white">
              010-2189-4562
            </p>
          </div>
        </div>
        <a
          href="tel:01021894562"
          className="inline-flex h-14 min-w-[202px] items-center justify-center gap-2 rounded-md bg-primary px-8 text-[16px] font-black text-white shadow-[0_12px_24px_rgba(232,52,47,0.25)] transition hover:-translate-y-0.5 hover:bg-[#d72d29] max-sm:w-full"
        >
          <Phone className="size-4 fill-white" />
          전화 연결하기
        </a>
      </section>

      {/*
      <section className="mt-5 rounded-md border border-zinc-200 bg-zinc-50 px-5 py-5 dark:border-zinc-800 dark:bg-zinc-900/60">
        <h2 className="text-[13px] font-black text-zinc-950 dark:text-white">
          거래 시 유의사항
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-[11px] font-medium text-zinc-700 dark:text-zinc-300">
          <li>직거래 시 반드시 차량 상태를 직접 확인하세요.</li>
          <li>시운전 시 안전에 유의하세요.</li>
          <li>거래 후 발생하는 문제는 판매자와 직접 해결해야 합니다.</li>
        </ul>
      </section>*/}
    </section>
  );
}
