import "./styles.css";
import Table from "./components/Table";
import * as jsonData from "./fakeData.json";

function formatJson(json) {
  let keys = Object.keys(json);
  let arr = [];

  for (let i = 0; i < keys.length; i++) {
    if (i in json) {
      arr.push(json[i]);
    }
  }

  return arr;
}

export default function App() {
  return (
    <div className="App">
      <div className="App">
        <body>
          <Table data={formatJson(jsonData)} />
        </body>
      </div>
    </div>
  );
}
