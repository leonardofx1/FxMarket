import styled from  'styled-components'


export const ContainerTopics = styled.div `
    width: 100%;
    height:auto;
    padding: 5px;
    border-bottom: 1px solid black;

    a {
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        
;
        width: 120px;
        height: 120px;
        img {
            width: 90px;
            height:90px;
            border-radius: 50%;
            border: 3px solid green;
        }
        span {
            font-weight: 600;

            color: #023c02;
        }
    }
`