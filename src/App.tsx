
import './App.css'
import LandingPage from './LandingPage';

function App() {
  const isLogin = false;
  if (!isLogin) return (
    <LandingPage></LandingPage>
  )

  return (

    <div>
      Home page
    </div>
  )
}

export default App
