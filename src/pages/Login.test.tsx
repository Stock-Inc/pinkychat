import {fireEvent, render, screen} from '@testing-library/react';
import {expect, it} from "vitest";
import Login from "./Login.tsx";
import {MemoryRouter, Route, Routes} from "react-router";
import SignUp from "./SignUp.tsx";

describe('Login', () => {
    it('doesnt redirect if all fields are empty', () => {
        render(
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        );

        fireEvent.click(screen.getByLabelText(/login button/i));

        expect(screen.getByLabelText(/login button/i)).toBeInTheDocument();
    });
    it('redirects to sign up if respective button is clicked', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/signup" element={<SignUp/>} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.queryByLabelText(/signup form/i)).not.toBeInTheDocument();
        fireEvent.click(screen.getByLabelText(/signup redirect/i));
        expect(screen.getByLabelText(/signup form/i)).toBeVisible();
    });
});