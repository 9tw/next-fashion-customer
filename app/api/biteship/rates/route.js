export async function POST(request) {
  try {
    const body = await request.json();

    const response = await fetch(
      process.env.NEXT_PUBLIC_BITESHIP_BASE_URL + "/v1/rates/couriers",
      {
        method: "POST",
        headers: {
          authorization: process.env.NEXT_PUBLIC_BITESHIP_API_KEY_LIVE || "",
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return Response.json(
        { error: data.error || "Failed to fetch shipping rates" },
        { status: response.status }
      );
    }

    return Response.json(data);
  } catch (error) {
    console.error("Biteship API error:", error);
    return Response.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}
