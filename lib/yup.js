import { format } from 'date-fns'
import * as yup from 'yup'
// import { EditorState } from 'draft-js'

const date = new Date()
const minDate = date.setDate(date.getDate() + 1)
const maxDate = date.setMonth(date.getMonth() + 6)

const minTime = '10:00'
const maxTime = '17:00'

export const appointmentSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required').email('Email is Invalid'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(/^\d+$/, 'Use numbers only')
    .max(8, 'Tel cannot be longer than 8 characters')
    .trim(),
  date: yup
    .date('Date is empty')
    .nullable()
    .transform((curr, orig) => (orig === '' ? null : curr))
    .min(format(minDate, 'yyyy-MM-dd'), 'Pick a date later than today')
    .max(
      format(maxDate, 'yyyy-MM-dd'),
      'You can only pick a date up to 6 months in the future'
    )
    .required('Date is required'),
  time: yup
    .string()
    .required('Time is required')
    .test('is-greater', 'Time should be between 10 and 17', function (value) {
      return value.toString() >= minTime && value.toString() <= maxTime
    }),
  notes: yup.string().min(3, 'Text must be at least 3 characters long'),
  treatment: yup.string().required('Treatment is required'),
})

export const userSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Email is invalid'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 3 characters long'),
})

export const treatmentSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  content: yup.string().required('Content is required'),
  // .default(() => EditorState.createEmpty()),
  image: yup.mixed().required('Image is required'),
})

export const aboutSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  content: yup.string().required('Content is required'),
})

export const heroSchema = yup.object().shape({
  show: yup.boolean(),
  title1: yup.string().required('Title is required'),
  title2: yup.string().required('Title 2 is required'),
  content: yup.string().required('Content is required'),
  link: yup.string().required('Link is required'),
})

export const footerSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  cvr: yup.string().required('CVR is required'),
  address: yup.string().required('Address is required'),
  zipncity: yup.string().required('Zip and City is required'),
  phone: yup.string().required('Phone is required'),
  email: yup.string().email('Email is invalid').required('Email is required'),
  openinghours: yup.string().required('Opening hours field is required'),
})
