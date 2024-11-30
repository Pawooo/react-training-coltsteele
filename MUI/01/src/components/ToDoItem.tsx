import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ToDoItem = ( { item, deleteItem, toggleItem } ) => {
  const { id, text, completed } = item;

  function runDeleteItem() {
    deleteItem(id);
  }

  // ToggleItem works, you just do it differently here
  // function runToggleItem() {
  //   toggleItem(id);
  // }

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="comments" onClick={runDeleteItem}>
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense onClick={toggleItem}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': id }}
          />
        </ListItemIcon>
        <ListItemText id={id} primary={text} />
      </ListItemButton>
    </ListItem>
  )
}

export default ToDoItem