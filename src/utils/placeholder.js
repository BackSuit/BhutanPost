const KNOWN_CATEGORIES = [
  "politics",
  "economy",
  "world",
  "culture",
  "sports",
  "technology",
  "opinion",
  "lifestyle",
  "tourism",
]

const PLACEHOLDER_COUNT = 3

// Supported image extensions when replacing SVGs with real photos.
// The utility picks the first extension whose file exists (checked at
// build time via the public folder); at runtime it always falls back to svg.
const SUPPORTED_EXTENSIONS = ["jpg", "jpeg", "png", "webp", "avif", "svg"]

/**
 * Returns a placeholder image path for articles without an image.
 * Looks for the first available extension in SUPPORTED_EXTENSIONS order,
 * so you can drop in real photos (e.g. politics-1.jpg) and they are used
 * automatically. Falls back to the generated .svg if none found.
 *
 * Works in both browser and server contexts — file-existence checks only
 * run server-side; the browser always receives the resolved path.
 */
export function getPlaceholderImage(categorySlug, articleSlug = "") {
  const category = KNOWN_CATEGORIES.includes(categorySlug)
    ? categorySlug
    : "general"

  let hash = 0
  for (let i = 0; i < articleSlug.length; i++) {
    hash = (hash * 31 + articleSlug.charCodeAt(i)) & 0xffff
  }
  const variant = (hash % PLACEHOLDER_COUNT) + 1
  const base = `${category}-${variant}`

  // Server-side: check which extension actually exists in /public
  if (typeof window === "undefined") {
    try {
      const fs = require("fs")
      const path = require("path")
      const dir = path.join(process.cwd(), "public", "images", "placeholders")
      for (const ext of SUPPORTED_EXTENSIONS) {
        if (fs.existsSync(path.join(dir, `${base}.${ext}`))) {
          return `/images/placeholders/${base}.${ext}`
        }
      }
    } catch {
      // fs not available (edge runtime), fall through to svg
    }
  }

  return `/images/placeholders/${base}.svg`
}
