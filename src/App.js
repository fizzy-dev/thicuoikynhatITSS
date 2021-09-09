import './App.css';
import useList from './hooks/useList';
import { useState } from 'react';

function App() {
  const { defaultData, keyword, setKeyword } = useList();
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    setKeyword(e.target.value)
  }

  const handleClickFind = () => {
    if (defaultData.indexOf(keyword) >= 0) {
      setResult(defaultData.indexOf(keyword) + 1)
    } else {
      setResult("NaN")
    }
  }


  return (
    <div>
      <p>学生一覧: [Huyen, Hoa, Hung, Long]</p>
      <p>探索名前:</p> <input value={keyword} onChange={handleInputChange}></input>
      <button onClick={handleClickFind}>確定</button>
      <p>探索名前: {keyword}</p>
      <p>位置: {result}</p>
    </div>
  );
}

export default App;
