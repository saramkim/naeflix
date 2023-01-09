export function debounce<Event>(callback: (event: Event) => void, delay: number) {
  let timer: NodeJS.Timeout;
  return (event: Event) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(callback, delay, event);
  };
}
