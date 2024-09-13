export async function getBlogPost(slug) {
    const response = await fetch(`https://dev.to/api/articles?slug=${slug}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    const data = await response.json();
    return data[0]; 
  }