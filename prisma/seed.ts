import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create organization
  const org = await prisma.organization.create({
    data: {
      name: 'Sand VollyBall Club',
    },
  });
  console.log(`✓ Created organization: ${org.name}`);

  // Hash passwords (we'll use bcrypt for security)
  const baileyPassword = await bcrypt.hash('password123', 10);
  const brandonPassword = await bcrypt.hash('password123', 10);

  // Create users
  const bailey = await prisma.user.create({
    data: {
      email: 'bailey@example.com',
      passwordHash: baileyPassword,
      name: 'Bailey Admin',
    },
  });
  console.log(`✓ Created user: ${bailey.email}`);

  const brandon = await prisma.user.create({
    data: {
      email: 'brandon@example.com',
      passwordHash: brandonPassword,
      name: 'Brandon Member',
    },
  });
  console.log(`✓ Created user: ${brandon.email}`);

  // Create memberships (connect users to org with roles)
  await prisma.membership.create({
    data: {
      userId: bailey.id,
      organizationId: org.id,
      role: 'admin',
    },
  });
  console.log(`✓ Made Bailey an admin of ${org.name}`);

  await prisma.membership.create({
    data: {
      userId: brandon.id,
      organizationId: org.id,
      role: 'user',
    },
  });
  console.log(`✓ Made Brandon a member of ${org.name}`);

  // Create a sample request from Brandon
  await prisma.request.create({
    data: {
      organizationId: org.id,
      userId: brandon.id,
      title: 'Budget Approval for Event',
      description: 'Need $500 for supplies for the launch event',
      status: 'pending',
    },
  });
  console.log(`✓ Created sample request`);

  console.log('✅ Seeding complete!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:');
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });