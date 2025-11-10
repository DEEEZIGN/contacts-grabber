import { saveSearchResult } from '@/server/utils/db'

export default defineEventHandler(async () => {
    const now = new Date().toISOString()

    const sampleResults = [
        {
            link: {
                url: 'https://example-studio.ru/',
                title: 'Музыкальная студия Example',
                snippet: 'Запись и обучение музыке',
            },
            page: 'https://example-studio.ru/',
            contacts: {
                emails: ['info@example-studio.ru'],
                phones: ['+7 (999) 123-45-67'],
                socials: [
                    { platform: 'vk', url: 'https://vk.com/example_studio' },
                    { platform: 'telegram', url: 'https://t.me/ZaderaVladislav' },
                ],
            },
            logs: [`[${now}] Seeded sample item 1`],
            hintsTried: ['Контакты', 'Связаться'],
        },
        {
            link: {
                url: 'https://romantic-sound.ru/',
                title: 'Школа музыки «Romantic Sound»',
                snippet: 'Музыкальная школа для детей и взрослых',
            },
            page: 'https://romantic-sound.ru/',
            contacts: {
                emails: ['client@romantic-sound.ru'],
                phones: ['+7 (3452) 52-08-48', '+7 (909) 741-64-50'],
                socials: [
                    { platform: 'whatsapp', url: 'https://wa.me/79612057647' },
                    { platform: 'telegram', url: 'https://t.me/RomanticSoundTMN' },
                    { platform: 'vk', url: 'https://vk.me/romanticsound' },
                ],
            },
            logs: [`[${now}] Seeded sample item 2`],
            hintsTried: ['Контакты', 'Напишите нам'],
        },
    ]

    const payload = {
        results: sampleResults,
        logs: [`[${now}] Добавлена тестовая история (2 элемента)`],
    }

    const id = saveSearchResult('Тестовые контакты', payload)
    return { ok: true, id }
})


