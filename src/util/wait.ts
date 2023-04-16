export const wait = <T>(func: () => T, timeout: number = 1000) =>
  new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(func());
      } catch (ex) {
        reject(ex);
      }
    }, timeout);
  });
