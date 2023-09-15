import { useEffect, useState } from "react";

type UseImageReturnValue<T extends Record<string, string>> = {
  [x in keyof T]: HTMLImageElement;
};

export default function useImage<T extends Record<string, string>>(
  sources: T
): UseImageReturnValue<T> | null {
  const [image, setImage] = useState<UseImageReturnValue<T> | null>(null);

  useEffect(() => {
    const getData = async () => {
      const promiseImagePreload = Object.entries(sources).map(([key, src]) => {
        return new Promise<[keyof T, HTMLImageElement]>((res, rej) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            res([key, img]);
          };
          img.onerror = img.onabort = () => {
            rej();
          };
        });
      });

      const images = await Promise.all(promiseImagePreload);
      setImage(Object.fromEntries(images) as UseImageReturnValue<T> | null);
    };

    getData();
  }, [sources]);

  return image;
}
