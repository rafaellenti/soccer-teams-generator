import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import PlayersInput from "./components/PlayersInput";

function App() {
  const [data, setData] = useState('');
  const request: any = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify([
      {
        "name": "Rafael",
        "stars": 2,
        "position": "D"
      },
      {
        "name": "Borga",
        "stars": 3,
        "position": "D"
      },
      {
        "name": "Queiroz",
        "stars": 3,
        "position": "D"
      },
      {
        "name": "Pedro",
        "stars": 4,
        "position": "M"
      },
      {
        "name": "Lucas",
        "stars": 5,
        "position": "A"
      },
      {
        "name": "Pardini",
        "stars": 3,
        "position": "A"
      },
      {
        "name": "Machado",
        "stars": 2,
        "position": "A"
      },
      {
        "name": "Hardy",
        "stars": 3,
        "position": "A"
      },
      {
        "name": "Scarano",
        "stars": 3,
        "position": "A"
      },
      {
        "name": "Ramon",
        "stars": 3,
        "position": "D"
      },
      {
        "name": "Arara",
        "stars": 3,
        "position": "D"
      },
      {
        "name": "Léo",
        "stars": 3,
        "position": "A"
      },
      {
        "name": "Vicente",
        "stars": 4,
        "position": "D"
      },
      {
        "name": "Arana",
        "stars": 4,
        "position": "M"
      },
      {
        "name": "Castilho",
        "stars": 6,
        "position": "M"
      },
      {
        "name": "Lukinha",
        "stars": 3,
        "position": "M"
      },
      {
        "name": "Chula",
        "stars": 6,
        "position": "M"
      },
      {
        "name": "Walter",
        "stars": 2,
        "position": "A"
      }
    ])
  }

  const generateTeams: any = async () => {
    try {
      const response: any = await fetch('http://localhost:8080/teams', request);
      const data: any = await response.json();

      setData(data);
    }
    catch (error: any) {
      console.log(error.message);
    }

    console.log(data);
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <PlayersInput />
            <div className="text-center">
              <button onClick={generateTeams} type="button" className="btn btn-primary mt-3">Gerar times</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
