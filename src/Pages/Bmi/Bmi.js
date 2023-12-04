import { useForm } from 'react-hook-form';
import './index.css';

function Bmicalc() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm();

  const bmiLevels = [
    { max: 18.5, message: 'Underweight' },
    { max: 24.9, message: 'Healthy Weight' },
    { max: 29.9, message: 'Overweight' },
    { max: Infinity, message: 'Obesity' }
  ];

  // what is that?! Why `bmi` is a part of the form if its not in the form, it should be state, same as message
  const bmi = watch('bmi');
  const message = watch('message');

  // why you get it from errors?!
  const { weight, height } = errors;

  const calcBmi = data => {
    // why parsing to float if its number input? If there is some values you dont want to accept fix it with validation
    const weight = parseFloat(data.weight);
    const heightInCm = parseFloat(data.height);
    // come on. You should use some lib to validate... What is the point of using the library for form right now?
    // and as i guess i can enter 9999999cm in height. Why is it even called heightInCm and not just height?
    // you can add a comment explaining its in cm
    if (isNaN(weight) || isNaN(heightInCm) || weight <= 0 || heightInCm <= 0) {
      alert('Please enter valid weight and height');
    } else {
      const heightInMeters = heightInCm / 100;
      const bmiValue = weight / heightInMeters ** 2;
      //setState, not value of the form!
      setValue('bmi', bmiValue.toFixed(1));

      const bmiCategory = bmiLevels.find(level => bmiValue <= level.max);
      setValue('message', bmiCategory.message);
    }
  };
  return (
    <div className="app" style={{ backgroundColor: '#000000' }}>
      <div className="container">
        <h2 className="text-quizz">Bmi Calculator</h2>
        {/*Why do you use native inputs when you have mui at the same time*/}
        <form onSubmit={handleSubmit(calcBmi)}>
          <div>
            <label htmlFor="weight" className="text-quizz">
              Weight (Kg)
            </label>
            <input
              type="number"
              {...register('weight', { max: 200, min: 0 })}
            />
            {weight && (
              <p className="error-message">Please enter a valid weight</p>
            )}
          </div>
          <div>
            <label htmlFor="Height" className="text-quizz">
              Height (Cm)
            </label>
            <input
              type="number"
              {...register('height', { max: 300, min: 0 })}
            />
            {height && (
              <p className="error-message">Please enter a valid height</p>
            )}
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
        <div className="center">
          <h3 className="text-quizz">Your Bmi is: {bmi} </h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}
export default Bmicalc;
