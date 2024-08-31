const allUsers = await prisma.user.findMany({
    //   include: { posts: true },
    // });