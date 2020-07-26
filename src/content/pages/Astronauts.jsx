import React, {useState} from 'react';
import { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

const Astronauts = (props) => {
    const [astronauts, setAstronauts] = useState()
    const [data, setData] = useState()

    const getData = () => {
    fetch(process.env.REACT_APP_ASTROS_KEY)
        .then(response => response.json())
        .then(results => {
        console.log(results.people)
        setData(results.people)
        })
      }

    useEffect(() => {
        getData()
    }, [])

    if(data){
        var astronautInfo = data.map((d, i) => {
            return (
                <tr key= {i}>
                    <TableCell align="right">{d.craft}</TableCell>
                    <TableCell align="right">{d.name}</TableCell>
                </tr>
            )
          })

    } else {
        var people
    }

    return(
        <div className="astronauts">
            <h1>
                Astronauts Stub
            </h1>
           <div className="astronautTable">
            <Table styles={"text-align: center;"}>
                    <thead>
                        <tr>
                            <TableCell align="right">Craft</TableCell>
                            <TableCell align="right">Astronaut</TableCell>
                        </tr>
                    </thead>
                    <TableBody> 
                            {astronautInfo}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default Astronauts