export const loadPost = async () => {

    const postResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const postImg = fetch('https://jsonplaceholder.typicode.com/photos');
    const [posts, imgs] = await Promise.all([postResponse, postImg])
    const postsJson = await posts.json();
    const imgsJson = await imgs.json();
    const postsImgs = postsJson.map((post, index) => {
        return { ...post, cover: imgsJson[index].url }
    })

    return postsImgs

}