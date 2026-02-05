import NavBar from '@/components/auth/Navbar';
import RegisterHero from '@/components/auth/RegisterHero';


export default function LandingPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar page="1" />
      <main className="">
        <RegisterHero />
      </main>
    </div>
    
  );
}