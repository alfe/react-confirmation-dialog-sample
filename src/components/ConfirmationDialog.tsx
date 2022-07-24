import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

export type ConfirmationDialogProps = {
  open: boolean,
  title?: string,
  submitButtonLabel?: string,
  onClose?: (event?: {}, reason?: 'backdropClick' | 'escapeKeyDown') => void,
  onApprove?: () => void,
  onDeny?: () => void,
  children?: React.ReactNode;

  dialogTitleId?: string;
  dialogDescriptionId?: string;
};
const ConfirmationDialog = (props: ConfirmationDialogProps) => {
  const {
    open, title, children, submitButtonLabel, onClose, onApprove, onDeny,
  } = props;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby={props.dialogTitleId}
      aria-describedby={props.dialogDescriptionId}>
      <DialogTitle id={props.dialogTitleId}>
        {!title ? '' : title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id={props.dialogDescriptionId}>
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'space-between', p: 2 }}>
        <Button onClick={onDeny || onClose}>
          {'CANCEL'}
        </Button>
        <SubmitButton onClick={onApprove}>
          {submitButtonLabel || 'OK'}
        </SubmitButton>
      </DialogActions>
    </Dialog>
  );
};
export default ConfirmationDialog;

// OKにフォーカスを当てる
const SubmitButton = ({ onClick, children }: { children: React.ReactNode, onClick?: (e: any) => void }) => {
  const buttonEl = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    buttonEl?.current?.focus && buttonEl?.current?.focus();
  }, []);
  return (
    <Button ref={buttonEl} onClick={onClick} color="primary">
      {children}
    </Button>
  );
};
