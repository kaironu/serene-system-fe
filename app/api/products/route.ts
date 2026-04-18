export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || '1';
  const limit = searchParams.get('limit') || '20';

  try {
    const response = await fetch(
      `${process.env.API_BASE_URL || 'http://localhost:5000/api'}/products?page=${page}&limit=${limit}`,
      {
        next: { tags: ['products'] },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
