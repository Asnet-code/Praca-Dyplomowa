"use client";
import { useRouter } from "next/navigation";
import Button from "../components/inputs/Button";

const Contact = () => {
  const router = useRouter();

  return (
    <div>
      <div className="flex flex-col w-full items-center justify-center gap-5 text-slate-900 text-3xl pt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1252.074090785032!2d15.9169959!3d51.1241747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f17bddda23aab%3A0xe2ffb42fcb7c15e8!2sRynek%2029%2C%2059-500%20Z%C5%82otoryja!5e0!3m2!1sen!2spl!4v1711030745707!5m2!1sen!2spl"
          width="600"
          height="600"
          loading="lazy"
        ></iframe>
        Rynek 29, 59-500 Złotoryja
        <div className="pt-5">
          <Button label="Powrót" onClick={() => router.push("/")} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
