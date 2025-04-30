"use client";
import useAuth from "@/hooks/useAuth";

export default function Dashboard() {
  const { user, isLogged } = useAuth();   // a – lit Redux

  if (!isLogged) return null;             // b – si pas loggé, le middleware aura déjà redirigé

  return (                                // c – contenu privé
    <main className="p-6">
      <h1 className="text-2xl font-bold">Bienvenue {user.name}</h1>
    </main>
  );
}
