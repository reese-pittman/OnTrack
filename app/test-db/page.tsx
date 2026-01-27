import { prisma } from '@/lib/prisma';

export default async function TestDB() {
  const orgCount = await prisma.organization.count();
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Database Test</h1>
      <p>Organizations in database: {orgCount}</p>
      <p className="text-green-600 mt-2">✓ Database connected successfully!</p>
    </div>
  );
}   