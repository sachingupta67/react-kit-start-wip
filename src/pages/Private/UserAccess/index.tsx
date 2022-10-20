import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Checkbox,
  FormGroup,
} from '@mui/material';

import React from 'react';
import { useFormik } from 'formik';
import './style.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import validationSchema from './validation';
import { DesktopTimePicker } from '@mui/x-date-pickers';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import CustomTextField from '../../../Components/CustomTextField';

const UserAccess: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      course: 'webDevelopment',
      gender: 'Male',
      day: Date.now(),
      time: Date.now(),
      dateTime: Date.now(),
      fruits: [],
    },
    validationSchema,
    onSubmit: (values) => {
      // console.log(values);
    },
  });
  const courseCategory = [
    {
      value: 'webDevelopment',
      label: 'Web Development',
    },
    {
      value: 'networking',
      label: 'Networking',
    },
    {
      value: 'computerScience',
      label: 'Computer Science',
    },
  ];

  const gender = [
    {
      value: 'Male',
      label: 'Male',
    },
    {
      value: 'Female',
      label: 'Female',
    },
    {
      value: 'Others',
      label: 'Others',
    },
  ];

  const fruits = [
    {
      id: 1,
      value: 'Apple',
      label: 'Apple',
    },
    {
      id: 2,
      value: 'Banana',
      label: 'Banana',
    },
    {
      id: 3,
      value: 'Orange',
      label: 'Orange',
    },
    {
      id: 4,
      value: 'Kiwi',
      label: 'Kiwi',
    },
  ];
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Card>
          <CardContent>
            <CustomTextField
              id="firstName"
              label="First Name"
              value={formik.values.firstName}
              onChangeHandler={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.errors.firstName}
              error={Boolean(formik.errors.firstName)}
            />
            <CustomTextField
              id="email"
              type="email"
              label="email"
              value={formik.values.email}
              onChangeHandler={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.errors.email}
              error={Boolean(formik.errors.email)}
            />
            <div className="course-category">
              <TextField
                select
                id="course"
                label="Course Category"
                margin="dense"
                variant="outlined"
                value={formik.values.course}
                onChange={formik.handleChange('course')}
                helperText={formik.errors.course}
                error={Boolean(formik.errors.course)}
                fullWidth>
                {courseCategory.map((item, i) => {
                  return (
                    <MenuItem key={i} value={item.value}>
                      {item.label}
                    </MenuItem>
                  );
                })}
              </TextField>
            </div>

            <div className="radio-btn">
              <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            </div>
            <RadioGroup
              row
              id="gender"
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={formik.values.gender}
              onChange={formik.handleChange('gender')}>
              {gender.map((item, i) => (
                <FormControlLabel
                  key={i}
                  value={item.value}
                  control={<Radio />}
                  label={item.label}
                />
              ))}
            </RadioGroup>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date"
                value={formik.values.day}
                onChange={(value) => {
                  formik.setFieldValue('day', value, true);
                }}
                renderInput={(params) => <TextField {...params} />}
                inputFormat="DD/MM/YYYY"
              />
              <DesktopTimePicker
                label="Time"
                value={formik.values.time}
                onChange={(value) => {
                  formik.setFieldValue('time', value, true);
                }}
                renderInput={(params) => <TextField {...params} />}
                inputFormat="HH:MM A"
              />
              <DateTimePicker
                label="Time"
                value={formik.values.dateTime}
                inputFormat="DD/MM/YYYY HH:MM A"
                onChange={(value) => {
                  formik.setFieldValue('dateTime', value, true);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <FormGroup>
              {fruits.map((item, i) => {
                return (
                  <FormControlLabel
                    key={i}
                    control={
                      <Checkbox
                        checked={
                          formik.values.fruits.length
                            ? formik.values.fruits.some((fr) => Number(fr) === item.id)
                            : false
                        }
                        value={item.id}
                        onChange={(e) => {
                          const val = e.target.value;

                          if (formik.values.fruits.length) {
                            const isAlready = formik.values.fruits.some((fr) => fr === val);
                            if (isAlready) {
                              //
                              const filterFruits = formik.values.fruits.filter((fr) => fr !== val);
                              formik.setFieldValue('fruits', filterFruits, true);
                            } else {
                              formik.setFieldValue('fruits', [...formik.values.fruits, val], true);
                            }

                            //
                          } else {
                            //
                            formik.setFieldValue('fruits', [val], true);
                          }
                        }}
                      />
                    }
                    label={item.label}
                  />
                );
              })}
            </FormGroup>
          </CardContent>
          <CardActions>
            <Button type="submit">Submit</Button>
            <Button onClick={formik.handleReset}>Clear</Button>
          </CardActions>
        </Card>
      </form>
    </div>
  );
};

export default UserAccess;
