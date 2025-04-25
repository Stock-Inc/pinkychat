import {fireEvent, render, screen} from '@testing-library/react';
import {expect, it} from "vitest";
import ProfileSettings from "../elements/profile/ProfileSettings.tsx";


describe('ProfilePage', () => {
    it('changes local username when a string is inserted and button is clicked', () => {
        render(
            <ProfileSettings/>
        );

        fireEvent.change(screen.getByLabelText(/username field/i), { target: { value: 'Bob' } });
        fireEvent.click(screen.getByText(/change profile name/i));
        expect(screen.queryByText(/bob/i)).not.toBeInTheDocument();
    });
});