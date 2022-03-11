import { FC, ReactChild, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{
    width: string | number;
    height: string | number;
}>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    position: relative;
`;

const OffScreen = styled.img`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`;

const Image = styled.img`
    object-fit: cover;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`;

export const BipolarImage: FC<{
    src: string;
    placeholder: ReactChild;
    width: string | number;
    height: string | number;
}> = ({ src, placeholder, width, height }) => {
    const [isLoading, setLoading] = useState(true);

    return (
        <Wrapper width={width} height={height}>
            {isLoading ? (
                <>
                    {placeholder}
                    <OffScreen
                        src={src}
                        onLoad={() => setTimeout(() => setLoading(false), 0)}
                        width={width}
                        height={height}
                    />
                </>
            ) : (
                <Image src={src} width={width} height={height} />
            )}
        </Wrapper>
    );
};
