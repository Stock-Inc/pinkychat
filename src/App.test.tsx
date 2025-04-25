import {render, screen} from '@testing-library/react';
import {expect, it} from "vitest";
import App from "./App.tsx";

it("should have app name displayed", () => {
    render(
        <App/>
    );
    const message = screen.queryByText(/Unnamed Chat /i);
    expect(message).toBeVisible();
});