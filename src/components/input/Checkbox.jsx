export default function Checkbox({ isChecked, setIsChecked }) {
  return (
    <div className="checkbox-wrapper">
      <input
        type="checkbox"
        checked={isChecked}
        onClick={() => {
          setIsChecked && setIsChecked(!isChecked);
        }}
      />
      <span></span>
    </div>
  );
}
