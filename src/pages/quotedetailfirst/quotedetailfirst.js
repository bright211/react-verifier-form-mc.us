import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import LabelInput from "../../components/labelinput";
import Select from "../../components/select";
import Check from "../../components/check";
import Footer from "../../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Types from "../../state/types";
import { db } from "../../api";
import { Container, ContentContainer, TitleContainer } from "../../styles";
import { BlockContainer } from "./style";
import { Apis } from "../../api";
import { toUserEmailTemplate } from "../../utils";
import Loading from "../../components/loading";
import moment from 'moment-timezone'

function QuoteDetailFirst() {
  const storeData = useSelector((store) => store.data);
  const history = useHistory();
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    ...storeData,
    
  });

  useEffect(() => {
    setValue({ ...storeData });
  }, [storeData]);

  //save data to the redux store from each form field
  const setData = (data) => {
    dispatch({ type: Types.SET_DATA, payload: { ...data } });
  };

  // validation of form fields value
  const checkValidation = () => {
    let temp = {};
    if (!value.Name) {
      temp = { ...temp, NameValidation: true };
    }
    if (!value.SurName) {
      temp = { ...temp, SurNameValidation: true };
    }
    if (!value.Email) {
      temp = { ...temp, EmailValidation: true };
    }
    if (!value.Phone) {
      temp = { ...temp, PhoneValidation: true };
    }
    if (value.State === "0") {
      temp = { ...temp, StateValidation: true };
    }
    if (value.City === "0") {
      temp = { ...temp, CityValidation: true };
    }
    if (!value.firstCheck) {
      temp = { ...temp, firstCheckValidation: true };
    }
    dispatch({ type: Types.SET_DATA, payload: { ...temp } });
    console.log(temp);
    if (Object.keys(temp).length > 0) {
      return 0;
    } else {
      return 1;
    }
  };

  // go second detail page
  const goNext = () => {
    
    if (checkValidation()) {
    setData({ isLoading: true });
      db.collection("PersonalInfomation")
        .add({
          Name: value.Name,
          SurName: value.SurName,
          Email: value.Email,
          Phone: value.Phone,
          State: value.State,
          City: value.City,
          RegisteredDate: moment().clone().tz("America/Los_Angeles").format()
        })
        .then(async function (docRef) {
          dispatch({ type: Types.SET_DOC_ID, payload: { docId: docRef.id } });
          console.log("Document written with ID: ", docRef.id);
          const res = await Apis.sendEmail({
            email: value.Email,
            emailBody: toUserEmailTemplate,
            subject: "Welcome to Mortgage Calculator Us.",
          });
          console.log(res);
          setData({ isLoading: false });
          history.push("/quotedetailsecond");
        })
        .catch(function (error) {
          setData({ isLoading: false });
          console.error("Error adding document: ", error);
        });
    }
  };

  return (
    <Container>
      <Header />
      {value.isLoading && <Loading />}

      <ContentContainer>
        <TitleContainer>
          <label className="label">
            Mortgage and refinancial has never been that easy.
          </label>
        </TitleContainer>
        <BlockContainer>
          <div className="block">
            <LabelInput
              label="Name*"
              placeHolder="Your Name…"
              setData={setData}
              value={value.Name}
              id="Name"
              validate="NameValidation"
              willValidation={value.NameValidation}
            />
            <LabelInput
              label="Surname*"
              placeHolder="Your surname…"
              setData={setData}
              value={value.SurName}
              id="SurName"
              validate="SurNameValidation"
              willValidation={value.SurNameValidation}
            />
            <LabelInput
              label="Your email*"
              placeHolder="Your email…"
              setData={setData}
              value={value.Email}
              id="Email"
              validate="EmailValidation"
              willValidation={value.EmailValidation}
            />
            <LabelInput
              label="Phone number*"
              placeHolder="Your phone number…"
              setData={setData}
              value={value.Phone}
              id="Phone"
              validate="PhoneValidation"
              willValidation={value.PhoneValidation}
            />
          </div>
          <div className="block">
            <Select
              label="State*"
              option="Select your state"
              setData={setData}
              value={value.State}
              id="State"
              validate="StateValidation"
              willValidation={value.StateValidation}
            />
            <Select
              label="City*"
              option="Select your city"
              setData={setData}
              value={value.City}
              id="City"
              validate="CityValidation"
              willValidation={value.CityValidation}
            />
            <Check
              value={value.firstCheck}
              id="firstCheck"
              validate="firstCheckValidation"
              setData={setData}
              willValidation={value.firstCheckValidation}
              label="By clicking the submit button below, I hereby agree to and accept the following terms and conditions. Visit Terms and Conditions page if needed."
            />
          </div>
        </BlockContainer>
      </ContentContainer>
      <Footer goNext={goNext} />
    </Container>
  );
}

export default QuoteDetailFirst;
