export async function fetchData<T>(
  url: string,
  options?: RequestInit,
): Promise<T | null> {
  try {
    const res = await fetch(url, {
      ...options,
    });

    if (!res.ok) {
      throw new Error('failed data fetch');
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
