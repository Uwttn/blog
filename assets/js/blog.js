const renderData = function() {
    const blogs = readData()
    for (const blog of blogs) {
        console.log(blog)
    }
}
renderData()