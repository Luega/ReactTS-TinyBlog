import "./App.css";
import { BlogContextProvider } from "./context/blog-context";
import Blog from "./components/Blog";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <BlogContextProvider>
        <Layout>
          <Blog />
        </Layout>
      </BlogContextProvider>
    </>
  );
}

export default App;
