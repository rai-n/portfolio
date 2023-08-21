import Image from 'next/image'
import Navbar from './components/Navbar'
import SideNavbar from './components/SideNavbar'
import WorkPage from './pages/Work'
import AboutMePage from './pages/Aboutme'
import ProjectsPage from './pages/Projects'

export default function Home() {
  return (
    <div>
      <Navbar />
      <SideNavbar />
      <AboutMePage />
      <WorkPage />
      <ProjectsPage />
    </div>
  )
}
