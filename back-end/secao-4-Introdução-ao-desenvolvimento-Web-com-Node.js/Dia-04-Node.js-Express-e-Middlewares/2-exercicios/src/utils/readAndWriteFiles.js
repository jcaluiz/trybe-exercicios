const fs = require('fs/promises');

let nextId = 0;

const readBlogPostFile = async () => {
    try {
        const arrayPosts = await fs.readFile('src/data/activities.json', 'utf-8');

        return JSON.parse(arrayPosts);
    } catch (error) {
        return null;
    }
}

const insertBlogPostFile = async (post) => {
  try {
    const arrayPosts = await readBlogPostFile();
    arrayPosts.push(post);
    nextId += 1;
    return await fs.writeFile('src/data/activities.json', JSON.stringify(arrayPosts));
  } catch (error) {
    return null;
  }
};