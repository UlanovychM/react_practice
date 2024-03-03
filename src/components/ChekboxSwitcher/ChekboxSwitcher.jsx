const ChekboxSwitcher = ({ value, onSelect }) => {
	const handleChange = evt => {
		onSelect(evt.target.checked);
	};

	return (
		<div>
			<label>
				<input
					type='checkbox'
					name='terms'
					checked={value}
					onChange={handleChange}
				/>
				I accept terms and conditions
			</label>
			<button type='button' disabled={!value}>
				Proceed
			</button>
		</div>
	);
};

export default ChekboxSwitcher;
