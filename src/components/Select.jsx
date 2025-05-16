export default function Select({ name, options }) {
  return (
    <>
      <select name={name}>
        {options.map((opt) => (
          <option value={opt}>{opt}</option>
        ))}
      </select>
    </>
  );
}
