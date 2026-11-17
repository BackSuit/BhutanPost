// Deterministic author pool — used when articles have no author from the API.
// Consistent per-article: same slug always returns same author.

const AUTHORS = [
  {
    name: "Bikash Timsina",
    slug: "bikash-timsina",
    bio: "Bikash Timsina is a journalist and digital media writer based in Thimphu. He covers politics, governance, and economic development in Bhutan, with a focus on how policy decisions shape everyday life.",
    categories: ["news", "politics", "economy", "world"],
  },
  {
    name: "Rejina Timsina",
    slug: "rejina-timsina",
    bio: "Rejina Timsina is a features writer and editor who explores Bhutanese culture, lifestyle, and social issues. She has a background in education and brings a human-interest perspective to her reporting.",
    categories: ["culture", "lifestyle", "education", "health"],
  },
  {
    name: "Tenzin Wangchuk",
    slug: "tenzin-wangchuk",
    bio: "Tenzin Wangchuk is a sports and outdoor journalist with a passion for archery, football, and the emerging sports scene in Bhutan. He also covers environmental issues related to mountain communities.",
    categories: ["sports", "environment", "tourism"],
  },
  {
    name: "Karma Dema",
    slug: "karma-dema",
    bio: "Karma Dema is a technology correspondent reporting on digital transformation, startups, and innovation in Bhutan and the broader South Asian region.",
    categories: ["technology", "economy"],
  },
  {
    name: "Sonam Choden",
    slug: "sonam-choden",
    bio: "Sonam Choden is an opinion writer and commentator on Bhutanese social affairs, environmental policy, and sustainable development. Her essays appear regularly in national and regional publications.",
    categories: ["opinion", "environment", "culture"],
  },
  {
    name: "Pema Yangzom",
    slug: "pema-yangzom",
    bio: "Pema Yangzom covers health, wellness, and public policy with a focus on rural communities. She is a trained public health professional turned journalist.",
    categories: ["health", "lifestyle", "education"],
  },
  {
    name: "Dorji Phuntsho",
    slug: "dorji-phuntsho",
    bio: "Dorji Phuntsho is a senior correspondent covering Bhutan's foreign affairs, regional diplomacy, and world news. He has reported from across South and Southeast Asia.",
    categories: ["world", "politics", "news"],
  },
]

// Simple deterministic hash — same string always returns same integer
function hashString(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0
  }
  return hash
}

/**
 * Returns a consistent author for an article based on its slug and category.
 * Always returns the same author for the same slug.
 */
export function getAuthorForArticle(slug, categorySlug) {
  // First try to find authors that match the category
  const categoryAuthors = AUTHORS.filter(
    a => !categorySlug || a.categories.includes(categorySlug)
  )
  const pool = categoryAuthors.length > 0 ? categoryAuthors : AUTHORS

  const index = hashString(slug || "") % pool.length
  return pool[index]
}

export function getAllAuthors() {
  return AUTHORS
}
