export const promiseWithTimeout = (delay: number, promise: Promise<any>) => {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Promise timed out'));
    }, delay);
  });
  return Promise.race([promise, timeout]);
};