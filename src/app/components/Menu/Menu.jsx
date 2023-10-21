"use client";

import React, { useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <div>
        <AiOutlineMenu ref={btnRef} onClick={onOpen} />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              <div className="flex flex-col gap-5">
                <ul className="flex flex-col items-start gap-5 text-base font-medium">
                  <li className="cursor-pointer">Company</li>
                  <li className="cursor-pointer">Services</li>
                  <li className="cursor-pointer">Industries</li>
                  <li className="cursor-pointer">Insights</li>
                  <li className="cursor-pointer">Portfolio</li>
                </ul>
                <button className="bg-sky-600 px-6 py-2 rounded-lg text-sm text-white ">
                  Let's Talk
                </button>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default Menu;
