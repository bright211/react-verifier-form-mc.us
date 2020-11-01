import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../styles";
import * as Types from "../../state/types";
import SideMenu from "../../components/sidemenu";
import { ContentContainer } from "./style";
import Header from "../../components/header";
import HeaderBottom from '../../components/HeaderBottom'
import { bannerImg4 } from '../../assets';
import LabelInput from "../../components/labelinput";

import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  margin: {
    marginRight: theme.spacing(2),
    textTransform: "none",
    fontFamily: "AvenirNext Regular",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "#353535",
    },
    "&:focus": {
      outline: "none",
    },
    width: '198px',
    height: '55px',
    padding:0,
  },
}));

function SignInPage() {
  const classes = useStyles()
  const dispatch = useDispatch();
  const storeData = useSelector((store) => store.data);
  const [value, setValue] = useState({
    ...storeData,
  });

  const theme = createMuiTheme({
    palette: {
      primary: {main:"#000"}    
    }  
  });
  useEffect(() => {
    setValue({ ...storeData });
  }, [storeData]);

  const toggleMenu = (data) => {
    dispatch({ type: Types.SET_DATA, payload: { ...data } });
  };
  const setData = (data) => {
    dispatch({ type: Types.SET_DATA, payload: { ...data } });
  };
  const checkValidation = () => {
    let temp = {};
    if (!value.LoginEmail) {
      temp = { ...temp, LoginEmailValidation: true };
    }
    if (!value.LoginPassword) {
      temp = { ...temp, LoginPasswordValidation: true };
    }
    dispatch({ type: Types.SET_DATA, payload: { ...temp } });

    if (Object.keys(temp).length > 0) {
      return 0;
    } else {
      return 1;
    }
  }
  const login = () =>{
    if (checkValidation()) {
      alert('You are right!!');
    }
  }
  return (
    <Container>
      <Header toggleMenu={toggleMenu} />
      <SideMenu value={value.drawMenu} toggleMenu={toggleMenu} />
      <HeaderBottom />
      <ContentContainer>
        <div className="group">
          <div className="block">
            <img src={bannerImg4} className='blockImg'/>
          </div>
          <div className="block">
            <div className="title">
              Please login to your account.
            </div>
            <div className='desc'>
              Please access your personal account on MC.US. Do not share your account access information with anyone.
            </div>
            <LabelInput
                    label="Email*"
                    placeHolder="Your email…"
                    setData={setData}
                    id="LoginEmail"
                    validate="LoginEmailValidation"
                    willValidation={value.LoginEmailValidation}
                  />
            <LabelInput className="LabelInput"
                    label="Password*"
                    placeHolder="Your password…"
                    setData={setData}
                    id="LoginPassword"
                    validate="LoginPasswordValidation"
                    type="password"
                    willValidation={value.LoginPasswordValidation}
                  />
                  <div className="LoginBtn">
                    <ThemeProvider theme={theme}>
                      <Button variant="contained" color="primary" className={classes.margin} onClick={() => login()}>
                      Login
                      </Button>
                    </ThemeProvider>
                  </div>
          </div>
        </div>
      </ContentContainer>
    </Container>
  );
}

export default SignInPage;
