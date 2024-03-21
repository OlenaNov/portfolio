import Queens from "../Queens/Queens";
import { Title, Wrapper } from "./ItemContent.styled";

export const ItemContent = () => {
 
 return (
    <Wrapper>
        <Title>8 Queens</Title>
        <Queens />
    </Wrapper>
  );
};

export default ItemContent;