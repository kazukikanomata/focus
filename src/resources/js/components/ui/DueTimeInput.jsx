const DueTImeInput = ({ value, onChange, disabled }) => {
  return (
    <>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">when is your task date?</legend>
        <input
          type="date"
          className="input w-full mb-2"
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </fieldset>
    </>
  );
};
export default DueTImeInput;
