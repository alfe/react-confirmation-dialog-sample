import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmationDialog from './ConfirmationDialog';

export type DeleteButtonWithConfirmProps = {
  onSubmit: () => void;
  tooltip: string;
  confirmTitle?: string;
  confirmText: string;
};
const DeleteButtonWithConfirm = (props: DeleteButtonWithConfirmProps) => {
  const [open, setOpen] = React.useState(false);
  const handleSubmit = () => {
    props.onSubmit();
    setOpen(false);
  };
  return (
    <>
      <Tooltip title={props.tooltip}>
        <span>
          <IconButton size="large" onClick={() => setOpen(true)}>
            {<DeleteIcon />}
          </IconButton>
        </span>
      </Tooltip>
      <ConfirmationDialog
        open={open}
        title={props.confirmTitle}
        onClose={() => setOpen(false)}
        onApprove={handleSubmit}>
        {props.confirmText}
      </ConfirmationDialog>
    </>
  );
};
export default DeleteButtonWithConfirm;
