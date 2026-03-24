export const products = [
  {
    name: "Classic Cotton T-Shirt",
    description:
      "Comfortable everyday t-shirt made from 100% organic cotton. Perfect for casual wear.",
    price: 24.99,
    imageUrl: "",
    extraImages: [],
    colors: ["#FFFFFF", "#000000", "#1E90FF"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    name: "Slim Fit Jeans",
    description:
      "Modern slim fit jeans with stretch fabric. Durable and stylish for any occasion.",
    price: 59.99,
    imageUrl: "",
    extraImages: [],
    colors: ["#1C1C1C", "#4A90E2", "#8B4513"],
    sizes: ["28", "30", "32", "34", "36"],
  },
  {
    name: "Wool Sweater",
    description:
      "Cozy merino wool sweater perfect for winter. Breathable and temperature-regulating.",
    price: 79.99,
    imageUrl: "",
    extraImages: [],
    colors: ["#8B0000", "#696969", "#FFD700"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    name: "Running Shoes",
    description:
      "Lightweight athletic shoes with responsive cushioning. Ideal for jogging and fitness.",
    price: 89.99,
    imageUrl: "",
    extraImages: [],
    colors: ["#000000", "#FF6347", "#00CED1"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
  },
  {
    name: "Casual Polo Shirt",
    description:
      "Classic polo shirt in breathable fabric. Great for casual or smart-casual outfits.",
    price: 39.99,
    imageUrl: "",
    extraImages: [],
    colors: ["#FFFFFF", "#2E8B57", "#DC143C"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    name: "Leather Jacket",
    description:
      "Premium leather jacket with modern design. A timeless piece for any wardrobe.",
    price: 199.99,
    imageUrl: "",
    extraImages: [],
    colors: ["#000000", "#8B4513"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    name: "Chinos Pants",
    description:
      "Comfortable cotton chinos perfect for work or weekend. Versatile and durable.",
    price: 54.99,
    imageUrl: "",
    extraImages: [],
    colors: ["#BEBAA7", "#87CEEB", "#8B4513"],
    sizes: ["28", "30", "32", "34", "36"],
  },
  {
    name: "Summer Dress",
    description:
      "Light and flowing summer dress in breathable cotton. Perfect for warm weather.",
    price: 49.99,
    imageUrl: "",
    extraImages: [],
    colors: ["#FFB6C1", "#87CEEB", "#F0E68C"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    name: "Hoodie Sweatshirt",
    description:
      "Cozy hoodie made from soft fleece. Perfect for layering and casual comfort.",
    price: 64.99,
    imageUrl: "",
    extraImages: [],
    colors: ["#000000", "#696969", "#FF8C00"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    name: "Denim Shorts",
    description:
      "Classic denim shorts with a comfortable fit. Ideal for summer outings.",
    price: 39.99,
    imageUrl: "",
    extraImages: [],
    colors: ["#1C1C1C", "#4169E1"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    name: "Athletic Tank Top",
    description:
      "Moisture-wicking tank top for workouts and sports. Breathable and lightweight.",
    price: 29.99,
    imageUrl: "",
    extraImages: [],
    colors: ["#000000", "#FF1493", "#00BFFF"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    name: "Formal Blazer",
    description:
      "Tailored blazer perfect for business and formal events. Sharp and professional.",
    price: 149.99,
    imageUrl: "",
    extraImages: [],
    colors: ["#000000", "#2F4F4F"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    name: "Cargo Pants",
    description:
      "Practical cargo pants with multiple pockets. Great for outdoor activities.",
    price: 69.99,
    imageUrl: "",
    extraImages: [],
    colors: ["#556B2F", "#696969", "#8B7355"],
    sizes: ["28", "30", "32", "34", "36", "38"],
  },
  {
    name: "Crop Top",
    description:
      "Trendy crop top perfect for summer. Lightweight and stylish for casual wear.",
    price: 34.99,
    imageUrl: "",
    extraImages: [],
    colors: ["#FFFFFF", "#FF69B4", "#FFD700"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    name: "Winter Coat",
    description:
      "Insulated winter coat with water-resistant material. Warm and protective.",
    price: 179.99,
    imageUrl: "",
    extraImages: [],
    colors: ["#000000", "#8B4513", "#4169E1"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    name: "Linen Shirt",
    description:
      "Breathable linen shirt perfect for hot weather. Elegant and comfortable.",
    price: 59.99,
    imageUrl: "",
    extraImages: [],
    colors: ["#F5DEB3", "#FFFFFF", "#D2B48C"],
    sizes: ["S", "M", "L", "XL"],
  },
].map((product, i) => ({
  ...product,
  id: i,
  imageUrl: "https://picsum.photos/512", // placeholder
  extraImages: [
    // placeholder
    "https://picsum.photos/512?grayscale",
    "https://picsum.photos/512?blur",
    "https://picsum.photos/512?sepia",
  ],
}));
