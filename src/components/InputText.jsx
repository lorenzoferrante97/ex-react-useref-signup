export default function InputText({ label, name, placeholder }) {
  return (
    <>
      <label htmlFor="fullName">{label}</label>
      <input name={name} type="text" placeholder={placeholder} />
    </>
  );
}
