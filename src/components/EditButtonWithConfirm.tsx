import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ConfirmationDialog from './ConfirmationDialog';
import { SubmitValues, useSubmitConfirm } from './customHooks';

export type EditButtonWithConfirmProps = {
  onSubmit: (value: SubmitValues, successCallback: () => void) => void;
  tooltip: string;
};
const EditButtonWithConfirm = (props: EditButtonWithConfirmProps) => {
  const [open, setOpen] = useState(false);
  const [openConfirm, values, setSubmitValues] = useSubmitConfirm({});
  const handleOnSubmit = () => {
    props.onSubmit(values, () => {
      setOpen(false); // 編集ダイアログを閉じる
      setSubmitValues(false); // 確認ダイアログを閉じる
    });
  };
  return (
    <>
      <Tooltip title={props.tooltip}>
        <span>
          <IconButton size="large" onClick={() => setOpen(true)}>
            {<EditIcon />}
          </IconButton>
        </span>
      </Tooltip>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>編集</DialogTitle>
        <EditDialogContent
          onSubmit={(value) => setSubmitValues(value)}
          onClose={() => setOpen(false)} />
      </Dialog>

      <ConfirmationDialog
        open={openConfirm}
        title="文字列を以下に変更します"
        onClose={() => setSubmitValues(false)}
        onApprove={handleOnSubmit}>
        {values.text}
      </ConfirmationDialog>
    </>
  );
};
export default EditButtonWithConfirm;

type EditDialogContentProps = {
  onSubmit: (value: { text: string }) => void;
  onClose: () => void;
}
const EditDialogContent = (props: EditDialogContentProps) => {
  const { register, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: { text: '' },
  });

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <DialogContent>
        <TextField
          {...register('text')}
          fullWidth
          defaultValue="" />
      </DialogContent>

      <DialogActions style={{ justifyContent: 'space-between', padding: '8px 16px 16px' }}>
        <Button onClick={props.onClose}>CANCEL</Button>
        <Button type="submit" color="primary">SEND</Button>
      </DialogActions>
    </form>
  );
};
