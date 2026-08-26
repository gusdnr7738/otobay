import { Zap } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <span className="grid size-6 place-items-center text-primary">
        <Zap className="size-6 fill-primary" strokeWidth={2.6} />
      </span>
      <span className="text-[21px] font-black tracking-normal text-dark dark:text-dark">
        바이크 꿀매 집합소
      </span>
    </div>
  );
}
