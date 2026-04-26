

import './App.css'
import "./index.css"
import Dashboard from "./Dashboard"
function App() {

const data = [
  { name: 'Jan', uv: 4000, pv: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398 },
  { name: 'Mar', uv: 2000, pv: 9800 },
  { name: 'Apr', uv: 2780, pv: 3908 },
  { name: 'May', uv: 1890, pv: 4800 },
  { name: 'Jun', uv: 2390, pv: 3800 },
  { name: 'Jul', uv: 3490, pv: 4300 },
];

  return (
    <>

    <Dashboard/>
    {/* <LineChart width={400} height={400} data={data}>
  <XAxis dataKey="name" />
  <Tooltip />
  <CartesianGrid stroke="#f5f5f5" />
  <Line type="monotone" dataKey="uv" stroke="#ff7300" />
  <Line type="monotone" dataKey="pv" stroke="#387908" />
</LineChart> */}

    </>
  )
}

export default App

/*react app
│
├── public
│   ├── favicon.ico
│   └── index.html
│
├── src
│   │
│   ├── assets
│   │   ├── images
│   │   ├── icons
│   │   └── fonts
│   │
│   ├── components
│   │   ├── common
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Loader.tsx
│   │   │
│   │   └── layout
│   │       ├── Navbar.tsx
│   │       ├── Footer.tsx
│   │       └── Sidebar.tsx
│   │
│   ├── features
│   │   ├── auth
│   │   │   ├── authSlice.ts
│   │   │   ├── authAPI.ts
│   │   │   └── LoginForm.tsx
│   │   │
│   │   ├── tours
│   │   │   ├── tourSlice.ts
│   │   │   ├── tourAPI.ts
│   │   │   └── TourCard.tsx
│   │
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── Tours.tsx
│   │   └── Dashboard.tsx
│   │
│   ├── routes
│   │   ├── AppRoutes.tsx
│   │   └── PrivateRoute.tsx
│   │
│   ├── hooks
│   │   ├── useAuth.ts
│   │   └── useDebounce.ts
│   │
│   ├── context
│   │   └── ThemeContext.tsx
│   │
│   ├── providers
│   │   └── ThemeProvider.tsx
│   │
│   ├── services
│   │   ├── api.ts
│   │   └── axiosInstance.ts
│   │
│   ├── utils
│   │   ├── formatDate.ts
│   │   └── calculatePrice.ts
│   │
│   ├── types
│   │   └── index.ts
│   │
│   ├── redux
│   │   └── store.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
│
└── package.json*/