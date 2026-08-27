import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { bikes } from "../data/bikes";
import { formatPrice } from "../utils";

export function DetailPage() {
  const { bikeId } = useParams();
  const bike = bikes.find((item) => item.id === bikeId);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!bike) {
    return <Navigate to="/" replace />;
  }

  // 대표 이미지 + 상세 이미지
  const images = useMemo(
    () => [bike.image, ...bike.gallery],
    [bike],
  );

  const currentImage = images[activeIndex];

  const moveImage = (step: number) => {
    setActiveIndex(
      (index) => (index + step + images.length) % images.length,
    );
  };

  return (
    <section className="px-8 pb-8 pt-7 max-sm:px-4">
      {/* 목록으로 돌아가기 */}
      <Link
        to="/"
        className="mb-7 inline-flex items-center gap-2 text-[15px] font-bold text-zinc-800 transition hover:text-primary dark:text-zinc-100"
      >
        <ChevronLeft className="size-4" />
        목록으로 돌아가기
      </Link>

      {/* 상품 영역 */}
      <div className="grid grid-cols-[392px_1fr] gap-6 max-md:grid-cols-1">
        {/* =========================
            왼쪽 - 이미지 영역
        ========================= */}
        <div>
          {/* 메인 이미지 */}
          <div className="relative overflow-hidden rounded-md bg-zinc-100 shadow-sm dark:bg-zinc-900">
            <img
              src={currentImage}
              alt={`${bike.name} 대표 사진`}
              className="aspect-[1.37] h-full w-full object-cover"
            />

            {/* 이전 버튼 */}
            <button
              type="button"
              onClick={() => moveImage(-1)}
              aria-label="이전 이미지"
              className="absolute left-5 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-zinc-900 shadow-lg transition hover:scale-105"
            >
              <ChevronLeft className="size-7" />
            </button>

            {/* 다음 버튼 */}
            <button
              type="button"
              onClick={() => moveImage(1)}
              aria-label="다음 이미지"
              className="absolute right-5 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-zinc-900 shadow-lg transition hover:scale-105"
            >
              <ChevronRight className="size-7" />
            </button>

            {/* 이미지 번호 */}
            <div className="absolute bottom-4 right-4 rounded-full bg-black/65 px-4 py-2 text-sm font-bold text-white">
              {activeIndex + 1} / {images.length}
            </div>
          </div>

          {/* 썸네일 */}
          <div className="mt-4 grid grid-cols-6 gap-3 max-sm:grid-cols-5">
            {images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`overflow-hidden rounded-lg border-2 transition ${
                  activeIndex === index
                    ? "border-primary shadow-md"
                    : "border-transparent hover:border-zinc-300"
                }`}
              >
                <img
                  src={image}
                  alt={`${bike.name} 썸네일 ${index + 1}`}
                  className="aspect-[1.2] h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* =========================
            오른쪽 - 상품 정보
        ========================= */}
        <aside className="pt-2 lg:max-w-[560px]">
          {/* 상품 기본 정보 */}
          <div>
            <h1 className="text-[34px] font-black leading-tight text-zinc-950 dark:text-white">
              {bike.name}
            </h1>

            <p className="mt-4 text-[18px] font-semibold text-zinc-700 dark:text-zinc-300">
              {bike.year}년식
            </p>

            <strong className="mt-3 block text-[34px] font-black text-primary">
              {formatPrice(bike.price)}
            </strong>

            <div className="mt-4 flex items-center gap-2 text-[15px] font-medium text-zinc-500 dark:text-zinc-400">
              <span>{bike.listedAt} 등록</span>
            </div>
          </div>

          {/* 차량 정보 */}
          <dl className="mt-7 grid grid-cols-[110px_1fr] gap-y-4 border-t border-zinc-200 pt-6 dark:border-zinc-800">
            {bike.specs.map((spec) => (
              <div key={spec.label} className="contents">
                <dt className="text-[16px] font-semibold text-zinc-500 dark:text-zinc-400">
                  {spec.label}
                </dt>

                <dd className="text-[16px] font-bold text-zinc-950 dark:text-white">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      {/* =========================
          상세 설명
      ========================= */}
      <section className="mt-10">
        <h2 className="text-[21px] font-black text-zinc-950 dark:text-white">
          상세 설명
        </h2>

        <div className="mt-4 text-[15px] font-medium leading-relaxed text-zinc-850 dark:text-zinc-200">
          {bike.description.map((line, index) =>
            line === "" ? (
              <div key={`space-${index}`} className="h-4" />
            ) : (
              <p key={`${line}-${index}`} className="mb-1.5">
                {line}
              </p>
            ),
          )}
        </div>
      </section>

      {/* =========================
          전화 문의
      ========================= */}
      <section className="mb-5 mt-10 flex items-center justify-between gap-4 rounded-xl border border-zinc-200 bg-white px-7 py-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 max-sm:flex-col max-sm:items-stretch">
        <div className="flex items-center gap-4">
          <Phone
            className="size-8 text-primary"
            strokeWidth={2.4}
          />

          <div>
            <p className="text-[16px] font-black text-zinc-950 dark:text-white">
              판매자에게 전화하기
            </p>

            <p className="mt-1 text-[22px] font-black text-zinc-950 dark:text-white">
              010-2189-4562
            </p>
          </div>
        </div>

        <a
          href="tel:01021894562"
          className="inline-flex h-14 min-w-[220px] items-center justify-center gap-2 rounded-md bg-primary px-8 text-[16px] font-black text-white shadow-[0_12px_24px_rgba(232,52,47,0.25)] transition hover:-translate-y-0.5 hover:bg-[#d72d29] max-sm:w-full"
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
      </section>
      */}
    </section>
  );
}