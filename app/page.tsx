export const revalidate = 0;

import Container from "./components/Container";
import SelectCategory from "./components/SelectCategory";

export default async function Home() {
  return (
    <div>
      <Container>
        <SelectCategory />
      </Container>
    </div>
  );
}
