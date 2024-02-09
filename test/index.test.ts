import { describe, expect, it } from 'bun:test'
import { Elysia } from 'elysia'
import '../src/index'
import { edenTreaty } from '@elysiajs/eden'
import type { App } from '../src/index'

const { api } = edenTreaty<App>('http://localhost:3000')


describe('Elysia', () => {
    it('return a response', async () => {
        const { data } = await api.v1.webhook.get()

        expect(data).toBe('hi')
    })
})