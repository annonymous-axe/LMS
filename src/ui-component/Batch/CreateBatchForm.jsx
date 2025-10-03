import { Button, Grid2 as Grid, TextField, Typography } from "@mui/material";
import { Modal } from "../Modal.jsx";
import DateField from "../DateField.jsx";
import TimeField from "../TimeField.jsx";


export const CreateBatchForm = ({
  isOpen = false,
  onClose,
  onSubmit,
  title = 'Form',
  children,
  submitText = 'Submit',
  cancelText = 'Cancel',
  isSubmitting = false,
  size = 'md'
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit(e);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size={size}
      footer={
        <>
          <Button onClick={onClose}>
            {cancelText}
          </Button>
          <Button variant="outlined" color="secondary">
            {isSubmitting ? 'Submitting...' : submitText}
          </Button>
        </>
      }
    >
      <form id="modal-form" onSubmit={handleSubmit}>
        <Grid container spacing={1}>
          <Grid size={12}>
            <Typography color="gray">Batch Meta Data</Typography>
          </Grid>          
          <Grid size={6}>
            <TextField 
              label='Batch Name'
              fullWidth
            />
          </Grid>
          <Grid size={6}>
            <TextField 
              label='Course Name'
              fullWidth
            />
          </Grid>
          <Grid size={12}>
            <Typography color="gray">Dates</Typography>
          </Grid>           
          <Grid size={6}>
            <DateField label='Start Date'/>
          </Grid>
          <Grid size={6}>
            <DateField label='End Date'/>
          </Grid>
          <Grid size={12}>
            <Typography color="gray">Schedules</Typography>
          </Grid>
          <Grid size={12}>
            <TextField 
              label='Week Days'
              fullWidth
            />
          </Grid>
          <Grid size={6}>
            <TimeField label='Batch Time' />
          </Grid>
        </Grid>
        
      </form>
    </Modal>
  );
};