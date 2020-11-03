import styled from "styled-components";
import { siderImg1, siderImg3 } from "../../assets";

export const SiderBarHeader = styled.div`
    @media (max-width: 930px){
        min-height: 50px;
        position: fixed;
        width: 100%;
        background-color: white;
        padding: 15px 18px 15px 22.2px;
        display: flex;
        justify-content: space-between;

        & .closeBtn{
            width: 20px;
            : hover{
                opacity: 0.5;
            }
        }
    }

    @media (min-width: 930px){
        padding: 26px 28px 0 15px;

        & .logoImg{
            display: none;
        }

        & .closeBtn{
            width: 20px;
            height: 20px;
            cursor: pointer;
            float: right;
            : hover{
                opacity: 0.5;
            }
        }
    }
`;

export const SiderBarBody = styled.div`

    .block{
        cursor: pointer;
        padding:30px 30px;
        width: 100%;
        float: left;
        text-align: left;

        .title{
            padding: 15px 0 0 0;
            font-family: AvenirNext Medium;
            font-size: 20px;
            font-weight: 600;
        }

        .content{
            padding:15px 0 0 0;
            font-family: AvenirNext Regular;
            font-size: 16px;
        }
    }

    .block:hover{
        opacity: 0.5;
    }
    #secondblock{
        padding-top: 34px;
    }
`;

export const CircleIcon = styled.div`
  border-radius: 50px;
`;