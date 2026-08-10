import gallery1 from "./gallery-1.jpg";
import gallery2 from "./gallery-2.jpg";
import gallery3 from "./gallery-3.jpg";
import gallery4 from "./gallery-4.jpg";
import gallery5 from "./gallery-5.jpg";
import hero from "./hero.jpg";
import jornada1 from "./jornada-1.jpg";
import jornada2 from "./jornada-2.jpg";
import jornada3 from "./jornada-3.jpg";

export const heroImage = hero;

export const journeyImages = {
  "jornada-1": jornada1,
  "jornada-2": jornada2,
  "jornada-3": jornada3,
} as const;

export const galleryImages = {
  "gallery-1": gallery1,
  "gallery-2": gallery2,
  "gallery-3": gallery3,
  "gallery-4": gallery4,
  "gallery-5": gallery5,
} as const;

export type JourneyImageKey = keyof typeof journeyImages;
export type GalleryImageKey = keyof typeof galleryImages;
