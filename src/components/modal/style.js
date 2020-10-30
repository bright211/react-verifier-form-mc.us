import styled from 'styled-components';

export const ModalContainer = styled.div`
    max-width: 600px;
    padding: 60px 50px;

    & .modalDialogTitle{
        font-size: 35px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #000000;
        padding:0px 0px 30px 0px;
        text-align: left;
    }

    & .modalDialogImg{
        width:100%;
        height:270px;
    }

    @media(min-width: 760px){
        & .btn-group{
            padding:30px 0 0 0;
            width: 426px;
            justify-content: space-between;
        }

        & .btnClose{
            display: none;
        }
    }

    @media(max-width: 760px){
        padding: 0px 15px;
        & .btnClose{
            padding-top:13px;
            float: right;
        }

        & .imgCls{
            width: 23px;
            height: 23px;
        }
        & .modalDialogTitle{
            padding: 60px 0 30px 0;
            font-size: 18px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #000000;
        }
        & .modalDialogImg{
            height:125px;
            background-color: #64ffca;
        }
        & .btn-group{
            padding: 20px 0 45px 0;
            display: block;
        }
    }
`