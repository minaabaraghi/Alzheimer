import React,{useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {editeFormModels} from './models';
function EditForm({firstName,lastName,username}:editeFormModels) {
  const [open, setOpen] = React.useState(false);
   
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
    <EditIcon className='pointer'  onClick={handleClickOpen}/>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
             please enter your data here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            
            
            variant="standard"
            value={firstName}
          />
          <br/>
          <TextField
            autoFocus
            margin="dense"
            id="lastName"
            
            
            variant="standard"
            value={lastName}
          />
          <br/>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            
            
            variant="standard"
            value={username}
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default EditForm