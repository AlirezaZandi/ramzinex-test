export const debounce = <T>(func: (...args: T[]) => void, timeout = 300) => {
  let timer: number | undefined;
  return (...args: T[]) => {
    if (!timer) {
      func.apply(this, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
    }, timeout);
  };
};
