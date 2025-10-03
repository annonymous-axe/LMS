import { Button, Grid2 as Grid, TextField, Typography } from "@mui/material";
import { Modal } from "../Modal.jsx";
import DateField from "../DateField.jsx";
import TimeField from "../TimeField.jsx";
import batches from "../../data/batches.json";
import { useAuth } from "../../contexts/AuthContext.jsx";
import { useState } from "react";


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

  const [batchData, setBatchData] = useState({
      name: '', 
      course: '',
      startDate: null, 
      endDate: null,
      students: 0,
      maxStudents: 50,
      weeks: '',
      time: null,
      duration: '',
      status: 'upcoming',
      progress: 0
    });

  const {user} = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = console.log(batches.length) + 1;
    const userId = user.id;
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
          <Button variant="outlined" color="secondary" onClick={handleSubmit}>
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
              value={batchData.name}
              name="name"
              onChange={(e) => setBatchData({...batchData, name: e.target.value})}
            />
          </Grid>
          <Grid size={6}>
            <TextField 
              label='Course Name'
              fullWidth
              value={batchData.course}
              name="course"
              onChange={(e) => setBatchData({...batchData, course: e.target.value})}
            />
          </Grid>
          <Grid size={12}>
            <Typography 
              color="gray">Dates</Typography>
          </Grid>           
          <Grid size={6}>
            <DateField 
              label='Start Date'
              value={batchData.startDate}
              name="startDate"
              onChange={(e) => setBatchData({...batchData, startDate: e.target.value})}            
            />
          </Grid>
          <Grid size={6}>
            <DateField 
              label='End Date'
              value={batchData.endDate}
              name="endDate"
              onChange={(e) => setBatchData({...batchData, endDate: e.target.value})}
            />
          </Grid>
          <Grid size={12}>
            <Typography color="gray">Schedules</Typography>
          </Grid>
          <Grid size={12}>
            <TextField 
              label='Week Days'
              fullWidth
              value={batchData.weeks}
              name="weeks"
              onChange={(e) => setBatchData({...batchData, weeks: e.target.value})}              
            />
          </Grid>
          <Grid size={6}>
            <TimeField 
              label='Batch Time' 
              value={batchData.time}
              name="time"
              onChange={(e) => setBatchData({...batchData, time: e.target.value})}               
          />
          </Grid>
          <Grid size={12}>
            <Typography color="gray">Batch Duration</Typography>
          </Grid>
          <Grid size={6}>
            <TextField 
              label='ex. 1:00 Hour'
              fullWidth
              value={batchData.duration}
              name="duration"
              onChange={(e) => setBatchData({...batchData, duration: e.target.value})}
            />
          </Grid>          
        </Grid>
        
      </form>
    </Modal>
  );
};