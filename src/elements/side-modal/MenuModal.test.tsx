import {fireEvent, render, screen} from '@testing-library/react';
import {expect, it} from "vitest";
import App from "../../App.tsx";

describe('MenuModal', () => {
    it('shows modal when button is clicked', () => {
        render(
            <App/>
        );

        expect(screen.queryByRole('dialog')).toBeNull();

        fireEvent.click(screen.getByLabelText(/open chat menu/i));

        expect(screen.getByRole('dialog')).toBeInTheDocument();
        expect(screen.getByText('Hello World')).toBeInTheDocument();
    });
});