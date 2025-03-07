import React from 'react'
import { render, screen, waitFor, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import ProductCard from '@/components/product-card'

test('product card', async () => {
    await act(async () => {
        render(<ProductCard
            productId={1}
            image='https://static5.depositphotos.com/1032932/423/i/950/depositphotos_4231002-stock-photo-studio-shot-of-a-fish.jpg'
            productName='Kipas Angin'
        />)
    })

    expect(screen.getByText('Kipas Angin')).toContainHTML('Kipas Angin')
})

test('product card open modal', async () => {
    await act(async () => {
        render(<ProductCard
            productId={1}
            image='https://static5.depositphotos.com/1032932/423/i/950/depositphotos_4231002-stock-photo-studio-shot-of-a-fish.jpg'
            productName='Kipas Angin'
        />)
    })

    await waitFor(() => screen.getByText('Kipas Angin'))

    await userEvent.click(screen.getByText('Kipas Angin'))

    await waitFor(() => {
        expect(document.getElementById('preview')).toBeInTheDocument()
    })
})