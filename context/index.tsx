import React, { useCallback, useMemo, useState } from "react";
import axios from "../axios/axios";

export const AppContext = React.createContext({});

export const AppProvider = ({ children }: any) => {
  const [txnData, setTxnData] = useState([]);
  const [txnIdList, setTxnIdList] = useState([]);
  const [singleTxnId, setSingleTxnId] = useState("");
  const [singleTxnData, setSingleTxnData] = useState(""); // @ts-ignore no problem in operation
  const [error, setError] = useState({
    state: false,
    message: "",
  });

  const getTxnData = useCallback(
    async (txn_id: string) => {
      const res = await axios("txn-data", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: { txn_id },
      });
      if (res.status === 200 || res.status === 201) {
        setSingleTxnData(res?.data);
        // console.log(res.data);
      } else {
        setError({ ...error, state: true, message: "Error fetching data!" });
      }
      console.log(res);
    },
    [error]
  );

  const getSingleTxnData = useCallback(
    (txid: string) => {
      if (txnData.length < 0) return;
      let data = Object.entries(txnData);
      let filtered = data.filter((key) => key[0] === txid);
      let values = Object.values(filtered[0]);
      setSingleTxnId(values[0]);
      setSingleTxnData(values[1]);
      console.log(data);
    },
    [txnData]
  );

  const values = useMemo(
    () => ({
      error,
      setError,
      singleTxnData,
      setSingleTxnData,
      txnData,
      setTxnData,
      singleTxnId,
      setSingleTxnId,
      txnIdList,
      setTxnIdList,
      getTxnData,
      getSingleTxnData,
    }),
    [
      error,
      setError,
      txnData,
      singleTxnId,
      setSingleTxnId,
      singleTxnData,
      setSingleTxnData,
      txnIdList,
      setTxnIdList,
      setTxnData,
      getTxnData,
      getSingleTxnData,
    ]
  );
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
