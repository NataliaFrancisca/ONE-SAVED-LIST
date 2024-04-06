import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import AppName from "./AppName";

describe('Component <AppName />', () => {
    test('Should render a h1 tag with the value below', () => {
        render(<AppName />);

        const title = screen.getByText('ONE. SAVED LIST');
        expect(title).toBeDefined();
    })
});