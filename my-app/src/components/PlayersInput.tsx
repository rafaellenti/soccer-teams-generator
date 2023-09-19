import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import AddIcon from '@mui/icons-material/Add';

function PlayersInput() {
    const [inputList, setInputList] = useState([{
        name: '',
        stars: ''
    }]);

    const addLine: any = () => {
        setInputList(prevInputList => [
            ...prevInputList,
            {
                name: '',
                stars: ''
            }
        ]);
    }

    const handleInputChange = (event: any) => console.log(event);

    return (
        <>
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Estrelas</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inputList.map((input: any, index: number) => (
                            <tr key={index}>
                                <th scope="row">{index}</th>
                                <td>
                                    <input
                                        type="text"
                                        value={input.name}
                                        onChange={handleInputChange}
                                        placeholder="Nome"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={input.stars}
                                        onChange={handleInputChange}
                                        placeholder="Estrelas"
                                    />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {console.log(inputList)}
            <button onClick={addLine} className="btn btn-success d-flex" type="button">
                <AddIcon />
                <p>Adicionar linha</p>
            </button>
        </>
    );
}

export default PlayersInput;