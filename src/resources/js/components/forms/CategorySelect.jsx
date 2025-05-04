const CategorySelect = ({ value, onChange, disabled, categories }) => {
  return (
    <>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">What's your category?</legend>
        <select
          className="select w-full mb-2"
          value={value}
          onChange={onChange}
          disabled={disabled}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </fieldset>
    </>
  );
};
export default CategorySelect;
