'use client';

import NavBar from '@/components/auth/Navbar';
import RegisterHero from '@/components/auth/RegisterHero';
import { useRegister } from '@/lib/hooks/useRegister';


export default function LandingPage() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    error,
    loading,
    register,
  } = useRegister();




  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar page="1" />
      <main className="">
        <RegisterHero
          email={email}
          onEmailChange={setEmail}
          password={password}
          onPasswordChange={setPassword}
          name={name}
          onNameChange={setName}
          error={error}
          loading={loading}
          onSubmit={register}

        />
      </main>
    </div>

  );
}