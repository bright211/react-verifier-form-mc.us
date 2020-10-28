import styled from "styled-components";
import { siderImg1, siderImg3 } from "../../assets";

export const SiderBarHeader = styled.div`
    @media (max-width: 930px){
        padding: 11px 10px;
        display: flex;
        justify-content: space-between;

        & .closeBtn{
            width: 13px;
            height: 13px;
        }
    }

    @media (min-width: 930px){
        padding: 15px 15px 0 15px;

        & .logoImg{
            display: none;
        }

        & .closeBtn{
            width: 13px;
            height: 13px;
            cursor: pointer;
            float: right;
        }
    }
`;

export const SiderBarBody = styled.div`
    font-family: AvenirNext-Regular;

    @media (min-width: 930px){
        padding-left: 30px;
        text-align: left;

        & .title{
            padding-top: 46px;
            padding-right: 31px;
            font-size: 38px;    
        }

        & .group1{
            display: flex;
            flex-direction: row;
            padding-top: 42px;

            & .banner{
                float: left;
                width: 75px;
                height: 75px;
                background: url(${siderImg1});
                background-size: 75px 75px;
            }
            & .text{
                display: flex;
                flex-direction: column;

                & .subscribe1{
                    padding-left: 15px;
                    padding-right: 36px;
                    text-align: left;
                    font-size: 24px;
                }
                & .subscribe2{
                    padding-left: 15px;
                    padding-top: 13px;
                    text-align: left;
                    font-size: 16px;
                    padding-right: 46px;
                }
            }
        }
        & .group2{
            display: flex;
            flex-direction: row;
            padding-top: 42px;

            & .banner{
                float: left;
                width: 75px;
                height: 75px;
                background: url(${siderImg3});
                background-size: 75px 75px;
            }
            & .text{
                display: flex;
                flex-direction: column;

                & .subscribe1{
                    padding-left: 15px;
                    text-align: left;
                    font-size: 24px;
                    padding-right: 46px;
                }
                & .subscribe2{
                    padding-left: 15px;
                    padding-top: 13px;
                    text-align: left;
                    font-size: 16px;
                    padding-right: 41px;
                }
            }
        }
    }
    @media (max-width: 930px){
        padding:30px 0 21px 10px;

        & .title{
            font-size: 24px;    
            padding-right: 20px;
            color: #000000;
            text-align: left;
        }

        & .group1{
            display: flex;
            flex-direction: column;
            padding-top: 23px;
        
            & .banner{
                float: left;
                width: 38px;
                height: 38px;
                background: url(${siderImg1});
                background-size: 38px 38px;
            }

            & .subscribe1{
                padding-right: 27px;
                padding-top: 8px;
                text-align: left;
                font-size: 16px;
            }
            & .subscribe2{
                padding-right: 12px;
                padding-top: 14px;
                text-align: left;
                font-size: 16px;
            }
        }
        & .group2{
            display: flex;
            flex-direction: column;
            padding-top: 19px;
        

            & .banner{
                padding-top: 19px;
                float: left;
                width: 38px;
                height: 38px;
                background: url(${siderImg3});
                background-size: 38px 38px;
            }

            & .subscribe1{
                padding-right: 14px;
                padding-top: 8px;
                text-align: left;
                font-size: 16px;
            }
            & .subscribe2{
                padding-right: 12px;
                padding-top: 8px;
                text-align: left;
                font-size: 16px;
            }
        }
    }
`;