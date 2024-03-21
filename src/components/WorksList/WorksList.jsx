import { Item, List, StyledLink, Wrapper } from "./WorksList.styled";

export const WorksList = () => {

    const id = "queens";

 return (
    <Wrapper>
        <List>
            <Item>
                <StyledLink to={`${id}`}>8 Queens</StyledLink>
            </Item>
        </List>
    </Wrapper>
  );
};

export default WorksList;