export default function Select({ value, onChange, name, options }) {
  return (
    <>
      <select value={value} onChange={onChange} name={name}>
        <option disabled value="">
          Scegli...
        </option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </>
  );
}
