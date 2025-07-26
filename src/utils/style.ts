export const getCategoryStyle = (category: string) : { bg: string, text: string, border: string } => {
    // Normalize the category name to handle any potential whitespace or case issues
    const normalizedCategory = category?.trim() || '';
    
    switch (normalizedCategory) {
      case "Laptops":
        return { bg: "bg-blue-100", text: "text-blue-700", border: "border-2 border-blue-200" }
      case "Monitors":
        return { bg: "bg-red-100", text: "text-red-700", border: "border-2 border-red-200" }
      case "Software":
        return { bg: "bg-green-100", text: "text-green-700", border: "border-2 border-green-200" }
      case "Components":
        return { bg: "bg-yellow-100", text: "text-yellow-700", border: "border-2 border-yellow-200" }
      case "Accessories":
        return { bg: "bg-purple-100", text: "text-purple-700", border: "border-2 border-purple-200" }
      default:
        console.warn(`Unknown category: "${normalizedCategory}" - using default styling`);
        return { bg: "bg-gray-100", text: "text-gray-700", border: "border-2 border-gray-200" }
    }
}