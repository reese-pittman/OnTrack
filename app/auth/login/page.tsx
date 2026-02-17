// app/(auth)/login/page.tsx
'use client';

import { useLogin } from '@/lib/hooks/useLogin';
import NavBar from '@/components/auth/Navbar';
import LoginForm from '@/components/auth/LoginHero';

export default function LoginPage() {
  // Call your custom hook - it returns everything you need!
  const { 
    email, 
    setEmail, 
    password, 
    setPassword, 
    error, 
    loading, 
    login 
  } = useLogin();

  return (
    <div>
      <NavBar page="1" />
      <main>
        <LoginForm
          email={email}
          onEmailChange={setEmail}
          password={password}
          onPasswordChange={setPassword}
          error={error}
          loading={loading}
          onSubmit={login}
        />
      </main>
    </div>
  );
}