import NavBar from '@/components/auth/Navbar';
import LoginHero from '@/components/auth/LoginHero';


export default function LandingPage() {
  return (
    <div>
      <NavBar page="1" />
      <main className="">
        <LoginHero />
      </main>
    </div>
    
  );
}