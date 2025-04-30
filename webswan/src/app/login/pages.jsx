"use client";                        // 0️⃣  → composant côté client

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login } from "@/lib/auth";   // fonction écrite au point 1.2
import { useRouter } from "next/navigation";

////////////////////////////////////
// 1️⃣  Schéma de validation Yup  //
////////////////////////////////////
const schema = yup.object({
  email:    yup.string()
               .email("Email invalide")
               .required("Champ requis"),
  password: yup.string()
               .min(6, "6 caractères min")
               .required("Champ requis"),
});

export default function LoginPage() {
  const router = useRouter();

  ///////////////////////////////////////////
  // 2️⃣  Connexion du formulaire à RHF    //
  ///////////////////////////////////////////
  const {
    register,            // pour lier <input>
    handleSubmit,        // pour gérer submit
    formState: { errors, isSubmitting },
    setError,            // pour afficher erreurs serveur
  } = useForm({ resolver: yupResolver(schema) });

  ///////////////////////////////////////////
  // 3️⃣  Fonction appelée au submit       //
  ///////////////////////////////////////////
  const onSubmit = async (data) => {
    try {
      await login(data);            // A. appelle POST /login
      router.replace("/dashboard"); // B. redirection si succès
    } catch (err) {
      ///////////////////////////////
      // C. Gestion erreurs serveur
      ///////////////////////////////
      if (err.response?.status === 422) {
        const laravelErr = err.response.data.errors;   // { email: [...], … }
        // On place chaque message sous son champ
        Object.entries(laravelErr).forEach(([field, msgs]) =>
          setError(field, { type: "server", message: msgs[0] })
        );
      } else {
        setError("root", { message: "Erreur inconnue" });
      }
    }
  };

  ///////////////////////////////////////////
  // 4️⃣  Affichage du formulaire          //
  ///////////////////////////////////////////
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Connexion</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-72">
        {/* Champ email */}
        <input
          placeholder="Email"
          {...register("email")}
          className="border p-2 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        {/* Champ mot de passe */}
        <input
          type="password"
          placeholder="Mot de passe"
          {...register("password")}
          className="border p-2 rounded"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

        {/* Erreur générale éventuelle */}
        {errors.root && <p className="text-red-500 text-sm">{errors.root.message}</p>}

        {/* Bouton */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-black text-white py-2 rounded hover:opacity-90 disabled:opacity-60"
        >
          {isSubmitting ? "Connexion…" : "Se connecter"}
        </button>
      </form>

      <a href="/register" className="text-blue-600 underline text-sm">
        Pas de compte ? S’inscrire
      </a>
    </main>
  );
}
