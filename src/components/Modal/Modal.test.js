import { render, screen, waitFor } from '@testing-library/react';
import Modal from './index';
import '@testing-library/jest-dom/extend-expect';

describe('Modal component', () => {
    const message = 'Testing message';
    const timeout = 1000;

    test('Modal is showing correctly', () => {
        render(<Modal isOpen={true}>{message}</Modal>);
        screen.getByText(message);
    })

    test('Modal is hidden when time is out', async () => {
        const mockHandler = jest.fn();
        render(<Modal isOpen={true} timeout={1000} setIsOpen={mockHandler} />)

        await waitFor(() => expect(mockHandler).toHaveBeenCalled(), {timeout: timeout + 500})
    })
});