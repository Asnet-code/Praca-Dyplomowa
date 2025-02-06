import Container from "@/app/components/Container";
import FormWrap from "@/app/components/FormWrap";
import AddComputerForm from "./AddComputerForm";

const AddComputer = () => {
  return (
    <div className="p-8">
      <Container>
        <FormWrap>
          <AddComputerForm />
        </FormWrap>
      </Container>
    </div>
  );
};

export default AddComputer;
