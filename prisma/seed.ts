import { PrismaClient } from "../generated/prisma";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  // Clear existing data
  await prisma.order.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.restaurant.deleteMany();

  // Seed Customers
  console.log("📝 Seeding customers...");
  const customer1 = await prisma.customer.create({
    data: {
      name: "John Doe",
      phone: "081234567890",
    },
  });

  const customer2 = await prisma.customer.create({
    data: {
      name: "Jane Smith",
      phone: "082345678901",
    },
  });

  const customer3 = await prisma.customer.create({
    data: {
      name: "Budi Santoso",
      phone: "083456789012",
    },
  });

  // Seed Restaurants
  console.log("🍽️ Seeding restaurants...");
  const restaurant1 = await prisma.restaurant.create({
    data: {
      name: "Warung Makan Jaya",
      description: "Restoran tradisional Indonesia dengan menu lengkap",
      isOpen: true,
    },
  });

  const restaurant2 = await prisma.restaurant.create({
    data: {
      name: "Pizza Italia",
      description: "Restoran Italia dengan pizza autentik",
      isOpen: true,
    },
  });

  const restaurant3 = await prisma.restaurant.create({
    data: {
      name: "Sushi Paradise",
      description: "Restoran Jepang dengan sushi dan ramen premium",
      isOpen: false,
    },
  });

  // Seed Orders
  console.log("🛒 Seeding orders...");
  await prisma.order.create({
    data: {
      customerId: customer1.id,
      restaurantId: restaurant1.id,
      items: 3,
      etaMinutes: 30,
    },
  });

  await prisma.order.create({
    data: {
      customerId: customer2.id,
      restaurantId: restaurant2.id,
      items: 2,
      etaMinutes: 25,
    },
  });

  await prisma.order.create({
    data: {
      customerId: customer3.id,
      restaurantId: restaurant1.id,
      items: 5,
      etaMinutes: 45,
    },
  });
}