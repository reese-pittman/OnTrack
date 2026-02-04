import NavBar from '@/components/auth/Navbar';
import RegisterHero from '@/components/auth/RegisterHero';


export default function LandingPage() {
  return (
    <div>
      <NavBar page="Register" />
      <main className="">
        <RegisterHero />
      </main>
    </div>
    
  );
}