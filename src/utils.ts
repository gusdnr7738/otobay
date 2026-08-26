export function formatPrice(price: number) {
  return `₩${price.toLocaleString('ko-KR')}`;
}

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}
