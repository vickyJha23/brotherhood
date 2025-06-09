import OneThreadLogo from "./logo.png";
import offerBanner from "./banner.png";

const imageCollection = {
    logo: OneThreadLogo,
    offerBanner: offerBanner

}

export const products = [
  {
    "id": 1,
    "name": "Classic White T-Shirt",
    "brand": "UrbanStyle",
    "price": 499,
    "size": ["S", "M", "L", "XL"],
    "color": "White",
    "inStock": true,
    "description": "Comfortable cotton white t-shirt for daily wear.",
    "featured": true,
    "image": "https://media.powerlook.in/mycustomfolder/mobile_banner_27_.jpg?aio=w-1920"
  },
  {
    "id": 2,
    "name": "Graphic Print T-Shirt",
    "brand": "Trendz",
    "price": 699,
    "size": ["M", "L", "XL"],
    "color": "Black",
    "inStock": true,
    "description": "Cool graphic printed black t-shirt, perfect for casual outings.",
    "featured": false,
    "image": "https://media.powerlook.in/mycustomfolder/mobile_banner_28_.jpg?aio=w-1920"
  },
  {
    "id": 3,
    "name": "Oversized T-Shirt",
    "brand": "StreetMood",
    "price": 799,
    "size": ["L", "XL", "XXL"],
    "color": "Beige",
    "inStock": false,
    "description": "Trendy oversized fit for streetwear lovers.",
    "featured": true,
    "image": "https://media.powerlook.in/mycustomfolder/mobile_banner_28_.jpg?aio=w-1920"
  },
  {
    "id": 4,
    "name": "V-Neck Solid T-Shirt",
    "brand": "CoolCore",
    "price": 549,
    "size": ["S", "M", "L"],
    "color": "Navy Blue",
    "inStock": true,
    "description": "Soft V-neck t-shirt made for comfort and style.",
    "featured": false,
    "image": "https://example.com/images/vneck-tshirt.jpg"
  },
  {
    "id": 5,
    "name": "Round Neck T-Shirt",
    "brand": "ComfyWear",
    "price": 459,
    "size": ["M", "L"],
    "color": "Grey",
    "inStock": true,
    "description": "Basic round-neck t-shirt ideal for layering or solo wear.",
    "featured": false,
    "image": "https://example.com/images/roundneck-tshirt.jpg"
  },
  {
    "id": 6,
    "name": "Sports Dry-Fit T-Shirt",
    "brand": "Athletico",
    "price": 899,
    "size": ["M", "L", "XL"],
    "color": "Red",
    "inStock": true,
    "description": "Sweat-resistant dry-fit t-shirt perfect for workouts.",
    "featured": true,
    "image": "https://example.com/images/sports-tshirt.jpg"
  },
  {
    "id": 7,
    "name": "Striped Casual T-Shirt",
    "brand": "DailyVibe",
    "price": 649,
    "size": ["S", "M", "L", "XL"],
    "color": "Blue/White",
    "inStock": true,
    "description": "Casual striped tee for everyday wear.",
    "featured": false,
    "image": "https://example.com/images/striped-tshirt.jpg"
  },
  {
    "id": 8,
    "name": "Longline T-Shirt",
    "brand": "StyleStretch",
    "price": 749,
    "size": ["L", "XL"],
    "color": "Olive Green",
    "inStock": true,
    "description": "Modern longline fit t-shirt for stylish streetwear look.",
    "featured": true,
    "image": "https://example.com/images/longline-tshirt.jpg"
  },
  {
    "id": 9,
    "name": "Tie-Dye T-Shirt",
    "brand": "BohoBeat",
    "price": 799,
    "size": ["M", "L"],
    "color": "Multi-color",
    "inStock": false,
    "description": "Vibrant tie-dye t-shirt for a funky and colorful vibe.",
    "featured": false,
    "image": "https://example.com/images/tiedye-tshirt.jpg"
  },
  {
    "id": 10,
    "name": "Minimal Text Print T-Shirt",
    "brand": "TypoTrend",
    "price": 599,
    "size": ["S", "M", "L", "XL"],
    "color": "Black",
    "inStock": true,
    "description": "Minimal design with subtle text print – great for daily fashion.",
    "featured": true,
    "image": "https://example.com/images/textprint-tshirt.jpg"
  }
]

export const carouselProducts = products.slice(0, 3)

export default imageCollection;