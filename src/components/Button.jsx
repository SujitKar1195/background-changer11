function Button({ color, flex, bgChange }) {
  return (
    <div>
      <button
        type="button"
        className="rounded-md border px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        style={{ backgroundColor: color, color: "white" }}
        onClick={() => bgChange(color)}>
        {color}
      </button>
    </div>
  );
}

export default Button;
