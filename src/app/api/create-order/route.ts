import { NextRequest, NextResponse } from "next/server";

/**
 * Razorpay Order Creation API Route
 *
 * STATUS: DISABLED — Awaiting Razorpay API keys
 *
 * To enable:
 * 1. Install razorpay: `npm install razorpay`
 * 2. Add to .env.local:
 *    RAZORPAY_KEY_ID=your_key_id
 *    RAZORPAY_KEY_SECRET=your_key_secret
 *    NEXT_PUBLIC_RAZORPAY_KEY_ID=your_key_id
 * 3. Uncomment the code below
 */

// import Razorpay from "razorpay";
//
// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID!,
//   key_secret: process.env.RAZORPAY_KEY_SECRET!,
// });

export async function POST(request: NextRequest) {
  // DISABLED: Razorpay integration pending API keys
  // When ready, uncomment and configure:

  /*
  try {
    const { amount, productId, productName } = await request.json();

    const options = {
      amount: amount * 100, // Convert to paise
      currency: "INR",
      receipt: `receipt_${productId}_${Date.now()}`,
      notes: {
        product_id: productId,
        product_name: productName,
      },
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json(
      {
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Razorpay order creation failed:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
  */

  return NextResponse.json(
    {
      message: "Payment integration coming soon. Razorpay API keys not configured yet.",
      status: "disabled",
    },
    { status: 503 }
  );
}
