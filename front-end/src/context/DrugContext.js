import React from "react";
import { getDrugs } from "../api/api_drug";

var DrugStateContext = React.createContext();
var DrugDispatchContext = React.createContext();

function drugReducer(state, action) {
  switch (action.type) {
    case "SET_DRUG_INFO":
      return { ...state, arrInput: action.payload };
    case "SET_FACTOR_INFO":
      return { ...state, factor: action.payload };
    case "SET_DRUG_UPDATE":
      return { ...state, refresh: action.payload };
    case "SET_DRUG_TEDAD":
      return { ...state, addTedadDrug: action.payload };
    case "SET_NAME_SABT":
      return { ...state, nameSabt: action.payload };
    case "SET_DRUG_CLICK":
      return { ...state, clickDrug: action.payload };
    case "SET_BOOL":
      return { ...state, bool: action.payload };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function DrugProvider({ children }) {
  var [state, dispatch] = React.useReducer(drugReducer, {
    arrInput: [],
    refresh: 0,
    addTedadDrug: [],
    bool: false,
    clickDrug: {
      daroo_name: "",
      daroo_shekl: "",
      daroo_khatar: "",
      daroo_noskhe: "",
      daroo_bime: "",
      daroo_tolidkonande: "",
      daroo_gheimat: 0,
      daroo_tedad: 0
    },
    nameSabt: '',
    factor: []

  });

  return (
    <DrugStateContext.Provider value={state}>
      <DrugDispatchContext.Provider value={dispatch}>
        {children}
      </DrugDispatchContext.Provider>
    </DrugStateContext.Provider>
  );
}

function useDrugState() {
  var context = React.useContext(DrugStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useDrugDispatch() {
  var context = React.useContext(DrugDispatchContext);
  if (context === undefined) {
    throw new Error("useDrugDispatch must be used within a UserProvider");
  }
  return context;
}

export { DrugProvider, useDrugState, useDrugDispatch,setInputNum, updateDrugTable, setFactorInfo, setBool, setClickDrug, setTedadDrug, setNameSabt };

// ###########################################################

function setInputNum(dispatch, list) {
  dispatch({
    type: "SET_DRUG_INFO",
    payload: list
  });
}
function setTedadDrug(dispatch, list) {
  dispatch({
    type: "SET_DRUG_TEDAD",
    payload: list
  });
}
function setClickDrug(dispatch, list) {
  dispatch({
    type: "SET_DRUG_CLICK",
    payload: list
  });
}
function setFactorInfo(dispatch, list) {
  dispatch({
    type: "SET_FACTOR_INFO",
    payload: list
  });
}
function setNameSabt(dispatch, string) {
  dispatch({
    type: "SET_NAME_SABT",
    payload: string
  });
}
function setBool(dispatch, boolean) {
  dispatch({
    type: "SET_BOOL",
    payload: boolean
  });
}
function updateDrugTable(dispatch) {
  getDrugs((isOK, data) => {
    if (isOK) {
      dispatch({
        type: "SET_DRUG_UPDATE",
        payload: data
      });
    }
  })
}

// const drugState = useDrugState();
// const drugDispatch = useDrugDispatch();

// function setTotal(dispatch, number) {
//   dispatch({
//     type: "SET_TOTAL",
//     payload: number
//   });
// }

// function updateTotal(dispatch) {
//   let total = 0
//   drugState.arrInput.map(itam => {
//     total = total + itam.total
//   })
//   setTotal(drugDispatch, total)
//   console.log('total');
//   console.log(total);

//   // dispatch({
//   //   type: "SET_TOTAL",
//   //   payload: total
//   // });
  
// }
