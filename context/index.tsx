import React, { useMemo, useState } from "react";
import axios from "../axios/axios";

export const AppContext = React.createContext({});

export const AppProvider = ({ children }: any) => {
  const [txnData, setTxnData] = useState();
  const [txnIdList, setTxnIdList] = useState([]);
  const [singleTxnData, setSingleTxnData] = useState();

  const config = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
  };
  // localhost:8000/txn-data

  async function getTxnData(txn_id: string) {
    const res = await axios("txn-data", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: { txn_id },
    });
    if (res.status === 200 || res.status === 201) {
      console.log(res.data)
    }
    console.log(res);
  }

  const values = useMemo(
    () => ({
      txnData,
      setTxnData,
      singleTxnData,
      setSingleTxnData,
      txnIdList,
      setTxnIdList,
      getTxnData,
    }),
    [
      txnData,
      singleTxnData,
      setSingleTxnData,
      txnIdList,
      setTxnIdList,
      setTxnData,
    ]
  );
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
