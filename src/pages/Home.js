import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 50px);
`;

const Title = styled.h1`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  font-size: 48px;
  text-align: center;
`;
  
  export default function Home() {
    return (
      <Wrapper>
        <Title>
          Welcome to your phonebook manager{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </Title>
      </Wrapper>
    );
  };