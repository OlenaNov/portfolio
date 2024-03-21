import { StyledLink, Text, Wrapper } from "./NotFoundContent.styled";

export const NotFoundContent = () => {
 
 return (
    <Wrapper>
        <Text>
        OOps! Page not found!
                Maybe the page is out of date.
                Want to return to 
            <StyledLink to='/'>
            Home page
            </StyledLink>
            ?
        </Text>
    </Wrapper>
  );
};

export default NotFoundContent;