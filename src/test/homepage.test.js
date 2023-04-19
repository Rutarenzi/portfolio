/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import React from "react";
import Homepage from "../pages/Homepage";

describe('Homapage test',()=>{
   it("should contains the heading 1",()=>{
    render(<Homepage />);
    const heading = screen.getByText(/First react web Axcel/i);
    expect(heading).toBeInTheDocument()
   })
});