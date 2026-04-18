export async function POST(request: Request) {
  const data = await request.json();

  try {
    const response = await fetch(`${process.env.API_BASE_URL || 'http://localhost:5000/api'}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Checkout failed');
    }

    const result = await response.json();
    return Response.json(result);
  } catch (error) {
    return Response.json(
      { error: 'Failed to process checkout' },
      { status: 500 }
    );
  }
}
