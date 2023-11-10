import { NextResponse } from 'next/server';

export const GET = async (req ,res ) => {
    const { searchParams } = new URL(req.url);
    const reqData = Object.fromEntries(searchParams);
    //console.log(massage)
    return NextResponse.json({
      message: 'Test getApiResponse GET success!',
      method: 'GET',
      reqData,
    });
  };
