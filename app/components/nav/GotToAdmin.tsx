import getCurrentUser from "@/actions/getCurrentUser";
import Link from "next/link";
import { RiAdminLine } from "react-icons/ri";

const GoToAdmin = async () => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser || currentUser.role !== "ADMIN") {
      return null;
    }
    return (
      <Link href={"/admin"}>
        <div>
          <RiAdminLine size={25} />
        </div>
      </Link>
    );
  } catch (error) {
    console.error("Błąd z wyswietleniem uzytkownika", error);
    return null;
  }
};

export default GoToAdmin;
