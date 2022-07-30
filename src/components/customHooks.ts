import { useState } from "react";

/*
 * 確認ダイアログ用に submit用のvalueを保存してDialogのopenの処理を行う
 * const [open, value, setSubmitValues] = useSubmitConfirm({});
 * useSubmitConfirm<S>(initialState: S | (() => S)): [boolean, S, Dispatch<SetStateAction<S>>]
 */
export type SubmitValues = S;
type S = { [key: string]: string };
export const useSubmitConfirm = (initialState: S): [boolean, S, (values: false | S) => void] => {
  const [open, setOpen] = useState(false);
  const [value, setValues] = useState(initialState);
  const setSubmitValues = (values: false | S ) => {
    if (typeof values === 'boolean' && values === false) {
      setOpen(false);
      setValues({});
    } else {
      setOpen(true);
      setValues(values);
    }
  };
  return [open, value, setSubmitValues];
};
