import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topics from "./Components/Topics";
import Integers from "./Components/Topics/Integers/Integers.jsx";
import Strings from "./Components/Topics/Strings/Strings.jsx";
import Header from "./Components/Header";
import "./styles/app.css";
import Palindrome from "./Components/Topics/Integers/Palindrome/Palindrome";
import ReverseInteger from "./Components/Topics/Integers/ReverseInteger/ReverseInteger";
import ReverseString from "./Components/Topics/Strings/ReverseString/ReverseStrings";
import Anagram from "./Components/Topics/Strings/Anagram/Anagram";
import Array from "./Components/Topics/Array/Array.jsx";
import MoveZeros from "./Components/Topics/Array/MoveZeros/MoveZeros";

function App() {
  return (
    <Router>
      <Header />
      <div className="container-main-super">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Topics" element={<Topics />} />
          <Route path="/Topics/" element={<Topics />} />
          <Route path="/Topics/Integers" element={<Integers />} />
          <Route path="/Topics/Integers/Palindrome" element={<Palindrome />} />
          <Route path="/Topics/Strings" element={<Strings />} />
          <Route
            path="/Topics/Integers/ReverseInteger"
            element={<ReverseInteger />}
          />
          <Route
            path="/Topics/Strings/ReverseString"
            element={<ReverseString />}
          />
          <Route path="/Topics/Strings/Anagram" element={<Anagram />} />
          <Route path="/Topics/Array" element={<Array />} />
          <Route path="/Topics/Array/MoveZeros" element={<MoveZeros />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
