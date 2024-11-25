import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import HomePage from "./pages/home.jsx";
import NotFound from "./pages/not-found.jsx";
import Movies from "./pages/movies.jsx";
import Login from "./pages/login2.jsx";
import Signup from "./pages/signup2.jsx";
import Search from "./pages/search.jsx";
import Now from "./pages/now_playing.jsx";
import Popular from "./pages/popular.jsx";
import Top from "./pages/top_rated.jsx";
import Coming from "./pages/up_coming.jsx";
import Detail from "./pages/detail.jsx"
import RootLayout from "./layout/root-layout.jsx";


const router = createBrowserRouter([
  {
      path: '/',
      element: <RootLayout/>,
      errorElement: <NotFound/>,
      // 1. Navbar 밑에 path에 해당하는 element를 보여주고 싶으면 아래와 같이 children을 활용
      children: [
          {
              // 2. index: true는 위의 path: '/' 즉, 홈 경로를 의미한다.
              index: true,
              element: <HomePage/>
          },
          {
              // 3. 부모의 path가 '/'이니, /를 붙이지 않아도 /movies랑 동일하게 동작한다.
              path: 'movies',
              children: [
                {
                  index: true,
                  element: <Movies/>
                },
                {
                  path: 'now-playing',
                  element: <Now/>
                },
                {
                  path: 'popular',
                  element: <Popular/>
                },
                {
                  path: 'top-rated',
                  element: <Top/>
                },
                {
                  path: 'up-coming',
                  element: <Coming/>
                },
                {
                  path: ':movieId', // 영화 상세 페이지 경로 추가
                  element: <Detail/>
                },
              ]
          },
          {
            path: 'login',
            element: <Login/>
          },
          {
            path: 'signup',
            element: <Signup/>
          },
          {
            path: 'search',
            element: <Search/>
          },
      ]
  },
])

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App;
