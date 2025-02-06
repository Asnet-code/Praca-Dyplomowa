import getCurrentUser from "@/actions/getCurrentUser";
import AdminNav from "../components/admin/AdminNav";
import NullData from "../components/inputs/NullData";

export const metadata = {
  title: "Sklep Admin",
  description: "Sklep Admin Panl Główny",
};

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Nie jesteś adminem, brak dostępu!" />;
  }
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
