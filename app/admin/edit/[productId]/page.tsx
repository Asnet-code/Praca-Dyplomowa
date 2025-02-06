import Container from "@/app/components/Container";
import getProductById from "@/actions/getProductById";
import EditForm from "./EditForm";

interface IPrams {
  productId?: string;
}

const Edit = async ({ params }: { params: IPrams }) => {
  const product = await getProductById(params);

  return (
    <div className="p-8">
      <Container>
        <EditForm product={product} />
        <div className="flex flex-col mt-20 gap-4"></div>
      </Container>
    </div>
  );
};

export default Edit;
