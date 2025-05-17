export default function InputText({ value, onChange, label, name, placeholder }) {
  return (
    <>
      <label htmlFor="fullName">{label}</label>
      <input value={value} onChange={onChange} name={name} type="text" placeholder={placeholder} />
    </>
  );
}
