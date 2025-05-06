"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { register as apiRegister } from "@/lib/auth";  // fonction écrite au point 1.2
import { useRouter } from "next/navigation";

//////////////////////////////
// Schéma de validation Yup //
//////////////////////////////
const schema = yup.object({
  name: yup.string()
           .min(2, "2 caractères min")
           .required("Champ requis"),
  email: yup.string()
            .email("Email invalide")
            .required("Champ requis"),
  password: yup.string()
               .min(6, "6 caractères min")
               .required("Champ requis"),
  password_confirmation: yup.string()
             .oneOf([yup.ref("password")], "Les mots de passe diffèrent")
             .required("Champ requis"),
});

export default function RegisterPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({ resolver: yupResolver(schema) });

  //////////////////////////////
  // Fonction submit du form //
  //////////////////////////////
  const onSubmit = async (data) => {
    try {
      await apiRegister(data);          // POST /register
      router.replace("/dashboard");     // redirige une fois inscrit
    } catch (err) {
      if (err.response?.status === 422) {
        const laravelErr = err.response.data.errors;
        Object.entries(laravelErr).forEach(([field, msgs]) =>
          setError(field, { type: "server", message: msgs[0] })
        );
      } else {
        setError("root", { message: "Erreur serveur" });
      }
    }
  };

  /////////////////////////
  // Rendu du formulaire //
  /////////////////////////
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Inscription</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-72">
        <input
          placeholder="Nom"
          {...register("name")}
          className="border p-2 rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        <input
          placeholder="Email"
          {...register("email")}
          className="border p-2 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Mot de passe"
          {...register("password")}
          className="border p-2 rounded"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          {...register("password_confirmation")}
          className="border p-2 rounded"
        />
        {errors.password_confirmation && (
          <p className="text-red-500 text-sm">
            {errors.password_confirmation.message}
          </p>
        )}

        {errors.root && <p className="text-red-500 text-sm">{errors.root.message}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-black text-white py-2 rounded hover:opacity-90 disabled:opacity-60"
        >
          {isSubmitting ? "Inscription…" : "S’inscrire"}
        </button>
      </form>

      <a href="/login" className="text-blue-600 underline text-sm">
        Déjà inscrit ? Se connecter
      </a>
    </main>
  );
}
