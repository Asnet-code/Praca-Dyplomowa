"use client";

import { useEffect, useState } from "react";
import Input from "../components/inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import Button from "../components/inputs/Button";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";
import Checkbox from "../components/inputs/Checkbox";

interface RegisterFormProps {
  currentUser: SafeUser | null;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ currentUser }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      acceptsPrivacyPolicy: false,
    },
  });

  useEffect(() => {
    if (currentUser) {
      router.push("/");
      router.refresh;
    }
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Utworzono konto");
        signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        }).then((callback) => {
          if (callback?.ok) {
            router.push("/");
            router.refresh();
            toast.success("Zalogowano");
          }
          if (callback?.error) {
            toast.error(callback.error);
          }
        });
      })
      .catch(() => toast.error("Coś poszło nie tak"));
  };
  if (currentUser) {
    return (
      <p className="text-center flex-center text-2xl">
        Jesteś już zalogowany, przekierowuje...
      </p>
    );
  }
  return (
    <>
      <div className="flex flex-col items-center">
        <Image src="/AsnetBg2.png" alt="Logo" width={80} height={50} />
        <div className="font-bold text-2xl text-slate-500">Zarejestruj się</div>
      </div>

      <Input
        id="name"
        label="Imię"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="email"
        label="e-mail"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Hasło"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
      <Checkbox
        id="acceptsPrivacyPolicy"
        label={
          <>
            Akceptuję{" "}
            <Link
              href="/polityka-prywatnosci"
              className="text-blue-500 hover:underline"
            >
              politykę prywatności
            </Link>
          </>
        }
        register={register}
        errors={errors}
        required
      />
      <Button
        label={isLoading ? "Ładuję się..." : "Zarejestruj się"}
        onClick={handleSubmit(onSubmit)}
      />
      <div className="text-sm flex gap-1">
        <p> Masz już konto?</p>
        <Link className="underline text-slate-500" href={"/login"}>
          Zaloguj się
        </Link>
      </div>
    </>
  );
};

export default RegisterForm;
