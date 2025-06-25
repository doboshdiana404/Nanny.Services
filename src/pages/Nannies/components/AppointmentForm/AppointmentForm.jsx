import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ref, push } from 'firebase/database';
import { db } from '@/firebase/firebase';
import styles from './AppointmentForm.module.css';
import Select from 'react-select';
import { getCities } from 'pangnote-cities';
import { reactSelectInputStyles } from '@/styles/reactSelectStyles';
import TimePickerDropdown from '@/ui/TimePicker/TimePickerDropdown';

const cityOptions = getCities('Ukraine').map(city => ({
  label: city,
  value: city,
}));
const schema = yup.object().shape({
  parentName: yup.string().required("Parent's name is required"),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup
    .string()
    .matches(/^\+?[0-9]{9,15}$/, 'Phone number must be valid')
    .required('Phone number is required'),
  address: yup
    .object()
    .shape({
      value: yup.string().required(),
      label: yup.string().required(),
    })
    .required('City is required'),
  childAge: yup
    .number()
    .typeError("Child's age must be a number")
    .min(0, "Child's age must be 0 or more")
    .max(18, "Child's age must be 18 or less")
    .required("Child's age is required"),
  bookingTime: yup.string().required('Booking time is required'),
  comment: yup.string().required('Comment is required'),
});

export default function AppointmentForm({ onSuccess, nannyId }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async data => {
    if (!nannyId) {
      alert('Error: Nanny ID not provided.');
      return;
    }
    const payload = {
      ...data,
      bookingTime: data.bookingTime,
      address: data.address?.value || data.address,
      nannyId,
      createdAt: new Date().toISOString(),
    };

    try {
      const appointmentsRef = ref(db, 'appointments');
      await push(appointmentsRef, payload);
      alert('Request successfully sent!');
      reset();
      onSuccess();
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formSentAppointment}>
      <div className={styles.firstFourInputs}>
        <label>
          <Controller
            control={control}
            name="address"
            render={({ field }) => <Select {...field} options={cityOptions} placeholder="Address" isClearable styles={reactSelectInputStyles} />}
          />
          <p className="error">{errors.address?.value?.message}</p>
        </label>
        <label>
          <input type="tel" {...register('phone')} placeholder="+380" className={styles.inputs} />
          <p className="error">{errors.phone?.message}</p>
        </label>
        <label>
          <input type="number" {...register('childAge')} placeholder="Child's age" className={styles.inputs} />
          <p className="error">{errors.childAge?.message}</p>
        </label>
        <Controller control={control} name="bookingTime" render={({ field }) => <TimePickerDropdown value={field.value} onChange={field.onChange} />} />{' '}
      </div>
      <label>
        <input type="email" {...register('email')} placeholder="Email" className={styles.inputs} />
        <p className="error">{errors.email?.message}</p>
      </label>
      <label>
        <input {...register('parentName')} placeholder="Father's or mother's name" className={styles.inputs} />
        <p className="error">{errors.parentName?.message}</p>
      </label>
      <label>
        <textarea {...register('comment')} placeholder="Comment" className={`${styles.inputs} ${styles.textareaInput}`} />
      </label>
      <button type="submit" disabled={isSubmitting} className={styles.apointmentSentBtn}>
        {isSubmitting ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}
