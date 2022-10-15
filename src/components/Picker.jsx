import { HexColorPicker, HexColorInput } from 'react-colorful';

function Picker({ color, onChange }) {
  return (
    <div className='picker'>
      <HexColorPicker color={color} onChange={onChange} />
      <HexColorInput color={color} onChange={onChange} style={{ borderColor: color }} />
      {/* <div className="picker__swatches"> */}
        {/* {presetColors.map((presetColor) => (
          <button
            key={presetColor}
            className="picker__swatch"
            style={{ background: presetColor }}
            onClick={() => onChange(presetColor)}
          />
        ))} */}
      {/* </div> */}
    </div>
  )
}

export default Picker;
