import React, { useMemo, useState } from "react";
import axios from "../axios/axios";

export const AppContext = React.createContext({});

export const AppProvider = ({ children }: any) => {
  const [txnData, setTxnData] = useState();
  const [txnIdList, setTxnIdList] = useState([]);
  const [singleTxnData, setSingleTxnData] = useState("data");

  const config = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const values = useMemo(
    () => ({
      txnData,
      setTxnData,
      singleTxnData,
      txnIdList,
      setTxnIdList,
    }),
    [txnData, singleTxnData, txnIdList, setTxnIdList, setTxnData]
  );
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
