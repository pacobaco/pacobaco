import { NextResponse } from 'next/server';
import { getProfileSnapshot } from '@/lib/github';

export async function GET() {
  const snapshot = await getProfileSnapshot();
  return NextResponse.json(snapshot, {
    headers: {
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
