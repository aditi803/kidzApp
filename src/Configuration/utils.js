
export const API_BASE_URL = "https://api2.kidzapp.com/api/3.0"

export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

export const Activities_API = getApiUrl("/reviews/featured?page=1&page_size=20&country_code=ae");

export const Blog_API =  getApiUrl("/blogs?page=1&limit=5&country_code=ae")

export const Kidzappolis_API =  getApiUrl("/categories?country_code=ae")

export const HomePageBanner_API = getApiUrl("/experiences/curated-list/?list_name=featured_banner_uae&country_code=&page=1&page_size=10&city=&website=1")

export const CarouselBottom_API = getApiUrl("/lists?country_code=ae")

export const BlogData_API = getApiUrl("/blogs?page=1&limit=5&country_code=ae")