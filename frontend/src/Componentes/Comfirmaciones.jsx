import React from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    Button,
  } from '@chakra-ui/react'
export default function Comfirmaciones({isOpen,onClose,deleteTarea,indexConfirm}) {
  return (
    <>
    <AlertDialog
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Eliminar Tarea</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Estas seguro de querer eliminar esta tarea?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button  onClick={onClose}>
              No
            </Button>
            <Button colorScheme='red' ml={3} onClick={()=>{
                deleteTarea(indexConfirm)
            }}>
              Si
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
