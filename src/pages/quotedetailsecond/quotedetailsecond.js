import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import LabelInput from "../../components/labelinput";
import Check from "../../components/check";
import Footer from "../../components/footer";
import BtnGroup from "../../components/btngroup";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Types from "../../state/types";
import { db } from "../../api";
import { Container, ContentContainer, TitleContainer } from "../../styles";
import { BlockContainer } from "./style";

/*
 * fill color body background
 */

const fillbodypaint = () => {
  var ele = document.getElementsByTagName("body");
  ele[0].style.backgroundColor = "#D8D8D8";
};

function QuoteDetailSecond() {
  fillbodypaint();

  const storeData = useSelector((store) => store.data);
  const docId = useSelector((store) => store.idData.docId);
  const history = useHistory();
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    ...storeData,
  });

  useEffect(() => {
    setValue({ ...storeData });
  }, [storeData]);

  const setData = (data) => {
    dispatch({ type: Types.SET_DATA, payload: { ...data } });
  };

  const checkValidation = () => {
    let temp = {};
    if (!value.MortageAmount) {
      temp = { ...temp, MortageAmountValidation: true };
    }
    if (!value.YearlyIncome) {
      temp = { ...temp, YearlyIncomeValidation: true };
    }
    if (!value.CreditScore) {
      temp = { ...temp, CreditScroeValidation: true };
    }
    if (!value.secondCheck) {
      temp = { ...temp, secondCheckValidation: true };
    }

    setValue({ ...value, ...temp });
    console.log(temp);
    if (Object.keys(temp).length > 0) {
      return 0;
    } else {
      return 1;
    }
  };

  const goNext = () => {
    if (checkValidation()) {
      db.collection("PersonalInfomation")
        .doc(docId)
        .set({
          Name: value.Name,
          SurName: value.SurName,
          Email: value.Email,
          Phone: value.Phone,
          State: value.State,
          City: value.City,
          MortageAmount: value.MortageAmount,
          YearlyIncome: value.YearlyIncome,
          TypeOperation: value.TypeOperation ? "New home" : "Secondary Home",
          CreditScore: value.CreditScore,
        })
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef);
          history.push("/processbar");
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    }
  };

  return (
    <Container>
      <Header />
      <ContentContainer>
        <TitleContainer>
          <label className="label">Mortgage and refinancial has never been that easy.</label>
        </TitleContainer>
        <BlockContainer>
          <div className="block">
            <LabelInput
              label="Mortgage amount*"
              placeHolder="Mortgage amount…"
              setData={setData}
              value={value.MortageAmount}
              id="MortageAmount"
              validate="MortageAmountValidation"
              willValidation={value.MortageAmountValidation}
              type="numberic"
            />
            <LabelInput
              label="Yearly income*"
              placeHolder="Yearly income…"
              setData={setData}
              value={value.YearlyIncome}
              id="YearlyIncome"
              validate="YearlyIncomeValidation"
              willValidation={value.YearlyIncomeValidation}
              type="numberic"
            />
          </div>
          <div className="block">
            <BtnGroup
              value={value.TypeOperation}
              setData={setData}
              id="TypeOperation"
              validate="TypeOperationValidation"
              willValidation={value.TypeOperationValidation}
            />
            <LabelInput
              label="Creadit rating*"
              placeHolder="Your credit score…"
              setData={setData}
              value={value.CreditScore}
              id="CreditScore"
              validate="CreditScroeValidation"
              willValidation={value.CreditScroeValidation}
              type="numberic"
            />
            <Check
              value={value.secondCheck}
              id="secondCheck"
              validate="secondCheckValidation"
              setData={setData}
              willValidation={value.secondCheckValidation}
              label="By clicking the submit button below, I hereby agree to and accept the following terms and conditions. Visit Terms and Conditions page if needed."
            />
          </div>
        </BlockContainer>
      </ContentContainer>
      <Footer navigation={"second"} goNext={goNext} />
    </Container>
  );
}

export default QuoteDetailSecond;
