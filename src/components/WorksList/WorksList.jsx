import { Item, List, StyledLink, Wrapper } from "./WorksList.styled";

export const WorksList = () => {
 
 return (
    <Wrapper>
        <List>
            <Item>
                <StyledLink>8 Queens</StyledLink>
            </Item>
        </List>
    </Wrapper>
  );
};

export default WorksList;