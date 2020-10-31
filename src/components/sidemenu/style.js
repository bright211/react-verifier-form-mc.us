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
            width: 30px;
            height: 30px;
            cursor: pointer;
            float: right;
            : hover{
                opacity: 0.5;
            }
        }
    }
`;

export const SiderBarBody = styled.div`

    @media (min-width: 930px){
        padding-right: 60px;
        padding-left: 60px;
        text-align: left;

        & .title{
            padding-top: 71px;
            font-size: 38px;    
            font-family: AvenirNext Medium;
        }

        & .group{
            cursor: pointer;
            display: flex;
            flex-direction: row;
            padding-top: 60px;

            :hover{
                opacity: 0.5;
            }

            & .bannerImg{
                border: 0px;
            }

            & .banner{
                cursor: pointer;
                float: left;
                width: 150px;
                height: 150px;
                
            }
            & .text{
                display: flex;
                flex-direction: column;

                & .subscribe1{
                    font-family: AvenirNext Medium;
                    padding-left: 30px;
                    text-align: left;
                    font-size: 24px;
                }
                & .subscribe2{
                    padding-left: 30px;
                    padding-top: 15px;
                    text-align: left;
                    font-size: 16px;
                }
            }
        }
    }
    @media (max-width: 930px){
        padding:50px 20px 0 20px;

        & .title{
            font-family: AvenirNext Medium;
            padding-top: 40.6px;
            font-size: 24px;    
            text-align: left;
        }

        & .group{
            cursor: pointer;
            display: flex;
            flex-direction: column;
            padding-top: 30px;
        
            & .banner{
                float: left;
                width: 75px;
                height: 75px;
                cursor: pointer;
            }

            & .subscribe1{
                font-family: AvenirNext Medium;
                padding-top: 15px;
                text-align: left;
                font-size: 18px;
            }
            & .subscribe2{
                padding-top: 15px;
                text-align: left;
                font-size: 16px;
            }
        }
    }
`;