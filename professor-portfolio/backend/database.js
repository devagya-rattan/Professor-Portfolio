import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const usersData = async () => {
  try {
    // Run inside `async` function
    const user = await prisma.user.create({
      data: {
        name: "raja",
        email: "devagya@gmail.com",
        posts: {
          create: [
            { title: "First Post" },  // Example of a valid post creation object
            { title: "Second Post" }
          ],
        },
      },
    });

    console.log(user);
  } catch (error) {
    console.error("Error creating user:", error.message);
  }
};

usersData();
