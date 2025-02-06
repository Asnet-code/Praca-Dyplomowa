"use client";

import { useEffect, useState } from "react";
import Input from "../components/inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import Button from "../components/inputs/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

interface LoginFormProps {
  currentUser: SafeUser | null;
}

const LoginForm: React.FC<LoginFormProps> = ({ currentUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push("/");
      router.refresh;
    }
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);
      if (callback?.ok) {
        router.push("/");
        router.refresh();
        toast.success("Zalogowano");
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
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
        <div className="font-bold text-2xl text-slate-500">Zaloguj się</div>
      </div>

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
      <Button
        label={isLoading ? "Ładuję się..." : "Zaloguj się"}
        onClick={handleSubmit(onSubmit)}
      />
      <div className="text-sm flex gap-1">
        <p> Nie masz konta?</p>
        <Link className="underline text-slate-500" href={"/register"}>
          Zarejestruj się
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
