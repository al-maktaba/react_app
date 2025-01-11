import React, { useEffect, useMemo, useRef, useState } from "react";
import PostService from "../api/PostService";
import { getPageCount } from "../utils/Paging";
import Pagination from "../components/ui/pagination/Pagination";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePosts"
import PostList from "../components/PostList";
import MyModal from "../components/ui/my_modal/MyModal";
import MyButton from "../components/ui/button/MyButton";
import Loader from "../components/ui/loader/Loader";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/ui/select/MySelect";


function Posts() {

    const [posts, setPosts] = useState([])

    // Paging
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const lastElement = useRef()

    const [fetchPosts, isLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers["x-total-count"]
        setTotalPages(getPageCount(totalCount, limit))
    })

    const [filter, setFilter] = useState({ sort: "", query: "" })
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    useObserver(lastElement, page < totalPages, isLoading, () => setPage(page + 1))
    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className="App">
            <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
                Create a post
            </MyButton>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>

            <hr style={{ margin: "15px 0" }} />
            <PostFilter filter={filter} setFilter={setFilter} />
            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue="Count of elements om the page"
                options={[
                    { value: 5, name: "5" },
                    { value: 10, name: "10" },
                    { value: 25, name: "25" },
                    { value: -1, name: "All" },
                ]}
            />

            {postError && <h1>An error occured: {postError}</h1>}
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Posts:"} />
            <div ref={lastElement} style={{ height: 20, background: "red" }} />
            {isLoading && <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}><Loader /></div>}
            <Pagination page={page} changePage={changePage} totalPages={totalPages} />
        </div>
    );
}

export default Posts;