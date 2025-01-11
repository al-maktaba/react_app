export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

// TODO: create hook usePagination

export const getPagesArray = (pagesCount) => {
    let result = []
    for (let i = 0; i < pagesCount; i++) {
        result.push(i + 1)
    }
    return result;
}