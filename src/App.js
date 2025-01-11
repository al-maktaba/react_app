import React, { useEffect, useMemo, useRef, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/ui/button/MyButton";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/ui/my_modal/MyModal";
import { usePosts } from "./hooks/usePosts";
import PostSevice from "./api/PostService";
import Loader from "./components/ui/loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPageCount, getPagesArray } from "./utils/Paging.js";
import Pagination from "./components/ui/pagination/Pagination.jsx";

function App() {

  const [posts, setPosts] = useState([])

  // Paging
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const [fetchPosts, isLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostSevice.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers["x-total-count"]
    setTotalPages(getPageCount(totalCount, limit))
  })

  const [filter, setFilter] = useState({ sort: "", query: "" })
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts(limit, page)
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
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

      {postError && <h1>An error occured: {postError}</h1>}
      {isLoading
        ? <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}><Loader /></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Posts:"} />}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default App;
