const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const processPhotos = (photoArr) =>
  photoArr.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;
    const alt = photo.alt;

    return {
      key: photo.id,
      src: photo.src,
      alt,
      width,
      height,
      srcSet: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
          id: photo.id,
          src: photo.src,
          alt,
          width: breakpoint,
          height,
        };
      }),
    };
  });

export default processPhotos;
