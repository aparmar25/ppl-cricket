export async function GET() {
  const url = process.env.DATABASE_URL ?? 'NOT SET';
  // Mask password but show structure
  const masked = url.replace(/:([^@]+)@/, ':***@');
  return Response.json({ 
    DATABASE_URL: masked,
    DIRECT_URL: (process.env.DIRECT_URL ?? 'NOT SET').replace(/:([^@]+)@/, ':***@'),
    NODE_ENV: process.env.NODE_ENV 
  });
}