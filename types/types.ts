export enum SORTOPTIONS {
  TITLE = 'title',
  PRICE = 'price',
  DISCOUNT_PERCENTAGE = 'discountPercentage',
  STOCK = 'stock',
  RATING = 'rating',
}


export enum CATEGORY_SLUG {
  BEAUTY = "beauty",
  FRAGRANCES = "fragrances",
  FURNITURE = "furniture",
  GROCERIES = "groceries",
  HOME_DECORATION = "home-decoration",
  KITCHEN_ACCESSORIES = "kitchen-accessories",
  LAPTOPS = "laptops",
  MENS_SHIRTS = "mens-shirts",
  MENS_SHOES = "mens-shoes",
  MENS_WATCHES = "mens-watches",
  MOBILE_ACCESSORIES = "mobile-accessories",
  MOTORCYCLE = "motorcycle",
  SKIN_CARE = "skin-care",
  SMARTPHONES = "smartphones",
  SPORTS_ACCESSORIES = "sports-accessories",
  SUNGLASSES = "sunglasses",
  TABLETS = "tablets",
  TOPS = "tops",
  VEHICLE = "vehicle",
  WOMENS_BAGS = "womens-bags",
  WOMENS_DRESSES = "womens-dresses",
  WOMENS_JEWELLERY = "womens-jewellery",
  WOMENS_SHOES = "womens-shoes",
  WOMENS_WATCHES = "womens-watches"
}

export type CATEGORY_LIST = {
  name: string,
  slug: CATEGORY_SLUG
}

export type PAGINATED_QUERY = {
  limit: number,
  skip: number,
  total: number
}

export type API_SUCCESS<T> = {
  success: true,
  message: string
  data: T
}

export interface PRODUCTS {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  dimensions: Dimensions
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: Review[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: Meta
  images: string[]
  thumbnail: string
}

export interface Dimensions {
  width: number
  height: number
  depth: number
}

export interface Review {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

export interface Meta {
  createdAt: string
  updatedAt: string
  barcode: string
  qrCode: string
}
