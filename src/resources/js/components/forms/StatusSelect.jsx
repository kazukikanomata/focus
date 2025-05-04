const StatusSelect = ({ value, onChange, disabled }) => {
  return (
    <>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">How's your task staus?</legend>
        <select
          defaultValue="Pick a browser"
          className="select w-full mb-2"
          value={value}
          onChange={onChange}
          disabled={disabled}
        >
          <option value="未">未</option>
          <option value="進行中">進行中</option>
          <option value="完了">完了</option>
        </select>
      </fieldset>
    </>
  );
};
export default StatusSelect;
