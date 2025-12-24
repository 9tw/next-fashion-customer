import Midtrans from "midtrans-client";

let snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.SECRET,
  clientKey: process.env.NEXT_PUBLIC_CLIENT,
});

export async function POST(request) {
  const { total } = await request.json();

  let parameter = {
    transaction_details: {
      order_id: "fashion-123",
      gross_amount: total,
    },
    // item_details: {
    //   name: productName,
    //   price: price,
    //   quantity: quantity,
    // },
  };

  const transaction = await snap.createTransaction(parameter);
  return Response.json(transaction);
}
