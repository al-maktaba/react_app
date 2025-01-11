import React, { useMemo, useRef, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/ui/button/MyButton";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/ui/my_modal/MyModal";
import { usePosts } from "./hooks/usePosts";

function App() {

  const [posts, setPosts] = useState([
    { id: 0, title: "JavaScript", description: "Description" },
    { id: 1, title: "Kotlin", description: "Description lalala" },
    { id: 2, title: "Java", description: "Description lollollol" },
    { id: 3, title: "Swift", description: "Description hahaha" },
    { id: 4, title: "Python", description: "Description hahaha" },
    { id: 5, title: "CSS", description: "Description hahaha" },
    { id: 6, title: "HTML", description: "Description hahaha" },
    { id: 7, title: "Go", description: "Description hahaha" },
    { id: 8, title: "Ruby", description: "Description hahaha" },
    { id: 9, title: "C#", description: "Description hahaha" },
    { id: 10, title: "C++", description: "Description hahaha" },
  ])

  const [filter, setFilter] = useState({ sort: "", query: "" })
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Create a post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Posts:"} />
    </div>
  );
}

export default App;
