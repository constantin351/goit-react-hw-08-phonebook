import { RotatingLines } from 'react-loader-spinner';
import styled from '@emotion/styled';

const LoaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Loader() {
    return (
        <LoaderWrapper>
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
        </LoaderWrapper>
    )
};

export default Loader;