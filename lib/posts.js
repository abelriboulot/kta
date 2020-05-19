import path from 'path'
import fs from 'fs'

const postsDirectory = path.join(process.cwd(), 'pages', 'posts')

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map( fileName => {
    // Remove ".js" from file name to get id
    const id = fileName.replace(/\.js$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const { title, short_title, description, author, published_date, last_revised_date, repo } = require(fullPath)
    return {
        title, short_title, description, author, published_date, last_revised_date, repo, id
    }
  })

  return allPostsData.sort((a, b) => {
    if (a.published_date < b.published_date) {
      return 1
    } else {
      return -1
    }
  })
}