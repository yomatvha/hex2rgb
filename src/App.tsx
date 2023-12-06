import { useState } from 'react'
import './App.css'

function App() {
  const [form, setForm] = useState({
    hexInput: '',
    rgbColor: '',
    text: 'Введите данные в формате #000000'
  });

  const hexToRgb= (hex: string) => {
    const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (rgb) {
      return `rgb(${parseInt(rgb[1], 16)}, ${parseInt(rgb[2], 16)}, ${parseInt(rgb[3], 16)})`;
    } else {
      return 'Ошибка!';
    }
  }

  const onChange = (e: { target: { value: string; }; }) => {
    setForm(prevForm => ({...prevForm, hexInput: e.target.value }));
  }

  if (form.hexInput.length === 7) {
    form.rgbColor = hexToRgb(form.hexInput);
    if (form.rgbColor === 'Ошибка!') {
      form.text = "Ошибка!";
      form.rgbColor = 'rgb(255, 0, 0)';
    } else {
      form.text = form.rgbColor;
    }
  } else {
    form.text = "Введите данные в формате #000000";
    form.rgbColor = 'rgb(255, 255, 255)';
  }
  
  const body = document.querySelector('body');
  body.style.background = form.rgbColor;

  return (
    <>
      <form>
        <input
          className="input"
          type="text"
          maxLength="7"
          onChange={onChange} 
          value={form.hexInput}
        />
      </form>
      <div className="div-text">
        {form.text}
      </div>
    </>
  )
}

export default App
