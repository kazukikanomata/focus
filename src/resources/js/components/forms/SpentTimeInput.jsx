const SpentTimeInput = ({ value, onChange, disabled }) => {
  return (
    <>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">How long does your task finish?</legend>
        <input
          type="time"
          className="input w-full mb-2"
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </fieldset>
    </>
  );
};
export default SpentTimeInput;
