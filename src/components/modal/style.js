import styled from 'styled-components';

export const ModalContainer = styled.div`
    max-width: 600px;
    padding: 30px 50px;

    & .modalDialogTitle{
        font-family: AvenirNext Medium;
        font-size: 24px;
        font-family: 
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
        height:100%;
    }

    @media(min-width: 760px){
        & .btn-group{
            padding:30px 0 0 0;
            width: 426px;
            justify-content: space-between;
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
            font-family: AvenirNext Medium;
            padding: 30px 0 30px 0;
            font-size: 18px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #000000;
        }
        & .modalDialogImg{
            // height:125px;
            background-color: #64ffca;
        }
        & .btn-group{
            padding: 20px 0 45px 0;
            display: flex;
            flex-direction: column;
        }
        & button{
            margin: 15px auto auto auto;
        }
    }
`