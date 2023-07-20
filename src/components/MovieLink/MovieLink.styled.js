import styled from 'styled-components';

export const StyledMovieLink = styled.li`

&:hover div{
    background: linear-gradient(39deg, rgba(53, 92, 94, 0.7) 6%, rgba(73, 78, 93, 0.2) 100%);
    color: #fff;
    /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; */
}

div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 190px;
    height: 450px;
    padding: 15px 20px;
    background-image: linear-gradient(39deg, rgba(53, 92, 94, 0.5) 6%, rgba(73, 78, 93, 0.5) 100%);
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    color: rgb(203, 224, 230);
    transition: background-image 0.25s ease, color 0.25s ease;
}

img{
    margin-bottom: 12px;
    border: 1px solid rgba(185, 185, 185, 0.8);
}

p, h2 {
    flex-grow: 2;
}
`;