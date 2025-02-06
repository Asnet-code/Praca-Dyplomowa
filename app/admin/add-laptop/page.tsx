import Container from "@/app/components/Container";
import FormWrap from "@/app/components/FormWrap";
import AddLaptopForm from "./AddLaptopForm";

const AddLaptop = () => {
  return (
    <div className="p-8">
      <Container>
        <FormWrap>
          <AddLaptopForm />
        </FormWrap>
      </Container>
    </div>
  );
};

export default AddLaptop;
