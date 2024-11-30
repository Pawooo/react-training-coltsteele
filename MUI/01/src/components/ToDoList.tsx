import { useState, useEffect } from 'react'
import List from '@mui/material/List';
import { v4 as uuidv4 } from 'uuid';
import ToDoItem from './ToDoItem';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Stack } from '@mui/material';

const initialData = () => {
    const data = JSON.parse(localStorage.getItem('dataTemp'));
    if(data) {
        return data;
    } else {
        return [];
    }
}

const ToDoList = ({data = []}) => {
    const [newToDo, setNewToDo] = useState("");
    const [dataTemp, setDataTemp] = useState(initialData);
    // const [dataTemp, setDataTemp] = useState(data);


    const addNewToDoItem = (e) => {
        e.preventDefault();
        const newData = {
            id: uuidv4(),
            text: newToDo,
            completed: false,
        }
        setDataTemp(oldData => [...oldData, newData]);

        setNewToDo('');
    }

    function updateNewToDo(e) {
        setNewToDo(e.target.value);
    }

    const deleteItem = (key) => {
        // console.log(dataTemp);
        setDataTemp((oldData) => oldData.filter(i => i.id !== key));
    }

    const toggleItem = (key) => {
        setDataTemp((oldData) => oldData.map(i => i.id === key ? { ...i, completed: !i.completed } : i));
    }

    // This won't work because you have it set in stone on every rerender
    useEffect(() => {
        localStorage.setItem(
            'dataTemp',
            JSON.stringify(dataTemp),
        )
    }, [dataTemp])

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', m: 'auto' }}>
            {dataTemp.map((item) => {
                return(<ToDoItem key={item.id} item={item} deleteItem={deleteItem} toggleItem={() => toggleItem(item.id)} />);
                })
            }
            <form action="submit">
                <Stack direction="row" sx={{ mt: 5 }}>
                    <TextField sx={{ width: '100%' }} id="outlined-basic" label="Outlined" variant="outlined" placeholder="Do Be Do Be Do" name="text" value={newToDo} onChange={updateNewToDo} />
                    <Button variant="outlined" onClick={addNewToDoItem}>Add New Item</Button>
                </Stack>
            </form>
        </List>
      );
}

export default ToDoList