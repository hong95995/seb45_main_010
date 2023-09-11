import React, { useState } from 'react';
import { ChangeEvent } from 'react';
import { Button, Dialog, DialogBody, DialogFooter, Input } from '@material-tailwind/react';
import axios from 'axios';

type props = {
  title: string;
  text: string;
  warning: string;
  btnName: string;
  btnCheck: string;
  changeItem: string;
  userId: number;
  API: string;
};

export const ChangeModal = ({
  title,
  text,
  warning,
  btnName,
  btnCheck,
  changeItem,
  userId,
  API,
}: props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  console.log(userId, API);

  const handleNameChange = async (newName: string) => {
    try {
      const data = {
        [changeItem]: newName,
      };
      const response = await axios.patch(`http://localhost:8080/member/${userId}`, data);
      console.log(response.data);
    } catch (error) {
      console.log(`$changeItem}`, error);
    }
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    handleNameChange(inputValue);
    handleOpen();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <Button onClick={handleOpen} size="sm">
        {btnName}
      </Button>
      <Dialog open={open} handler={handleOpen} size="xs" className="overflow-hidden">
        <DialogBody divider>
          <p className="text-center text-black">{title}</p>
          <div className="grid grid-flow-col">
            <Input
              label={text}
              crossOrigin={undefined}
              color="blue"
              className="text-black"
              value={inputValue}
              onChange={handleChange}
            />
            <Button
              variant="outlined"
              color="red"
              onClick={handleClick}
              className="col-span-1 p-2 ml-5"
            >
              {btnCheck}
            </Button>
          </div>
        </DialogBody>
        <DialogFooter className="flex justify-center space-x-2">
          <p className="text-xs text-black">{warning}</p>
        </DialogFooter>
      </Dialog>
    </>
  );
};
