export function throttle<Event>(callback: (event: Event) => void, delay: number) {
  let timer: NodeJS.Timeout | null;
  return (event: Event) => {
    if (timer) return;
    timer = setTimeout(() => {
      callback(event);
      timer = null;
    }, delay);
  };
}
