import { Link } from "react-router-dom";
import type { Bike } from "../types/bike";
import { formatPrice } from "../utils";

export function BikeCard({ bike }: { bike: Bike }) {
  return (
    <Link
      to={`/bikes/${bike.id}`}
      className="group overflow-hidden rounded-md border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-card dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div className="relative aspect-[1.56] overflow-hidden bg-zinc-100">
        <img
          src={bike.image}
          alt={`${bike.name} 사진`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="px-3 pb-3 pt-2">
        <h3 className="mt-1 truncate text-[17px] font-extrabold text-zinc-950 dark:text-white">
          {bike.name} ({bike.year})
        </h3>
        <div className="mt-2 flex items-end justify-between gap-2">
          <strong className="text-[16px] font-black text-primary">
            {formatPrice(bike.price)}
          </strong>
          <span className="text-[14px] text-zinc-500 dark:text-zinc-400">
            {bike.listedAt}
          </span>
        </div>
      </div>
    </Link>
  );
}
