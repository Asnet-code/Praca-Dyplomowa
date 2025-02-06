import Container from "@/app/components/Container";
import getCurrentUser from "@/actions/getCurrentUser";

import getOrders from "@/actions/getOrders";
import ManageOrdersClient from "./ManageOrdersClient";
import NullData from "@/app/components/inputs/NullData";

const ManageOrders = async () => {
  const orders = await getOrders();
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Nie jesteś adminem brak dostępu!" />;
  }

  return (
    <div className="pt-8">
      <Container>
        <ManageOrdersClient orders={orders} />
      </Container>
    </div>
  );
};

export default ManageOrders;
