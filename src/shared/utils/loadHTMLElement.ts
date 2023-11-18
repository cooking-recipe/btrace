export const loadHTMLElement = (src: string) => {
  return new Promise<HTMLImageElement | HTMLAudioElement>((resolve, reject) => {
    let element: HTMLImageElement | HTMLAudioElement | HTMLVideoElement;
    const fileType = src.slice(-4);

    switch (fileType) {
      case '.jpg':
      case '.png':
      case '.gif':
      case '.svg':
      case 'webp':
        element = new Image();
        break;

      case '.mp3':
      case '.wav':
        element = new Audio();
        element.src = src;
        element.muted = true;
        resolve(element);
        break;

      case 'webm':
        element = document.createElement('video');
        element.src = src;
        element.muted = true;
        resolve(element);
        break;

      default:
        reject(new Error('Неизвестный формат файла'));
        return;
    }

    element.crossOrigin = 'Anonymous';
    element.src = src;
    document.getElementById('trash')?.appendChild(element);

    element.onload = () => resolve(element);
    element.onerror = () => reject(new Error(`Ошибка загрузки ${src}`));
    setTimeout(() => reject(new Error(`Timed out on loading ${src}`)), 5000);
  });
};