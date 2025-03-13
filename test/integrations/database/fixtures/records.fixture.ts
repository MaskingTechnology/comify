
import type { RecordData } from '^/integrations/database';

export const RECORD_TYPES =
{
    FRUITS: 'fruits',
    PIZZAS: 'pizzas'
};

export const RECORDS: Record<string, Record<string, RecordData>> =
{
    FRUITS: {
        APPLE: { id: '1', name: 'Apple', country: 'Belgium', sprayed: false },
        PEAR: { id: '2', name: 'Pear', country: 'Netherlands', sprayed: true }
    },

    PIZZAS: {
        MARGHERITA: { id: '1', name: 'Margherita', size: 15, price: 12.00, folded: false },
        CALZONE: { id: '2', name: 'Calzone', size: 20, price: 11.00, folded: true },
        PEPPERONI: { id: '3', name: 'Pepperoni', size: 18, price: 13.50, folded: false },
        VEGETARIAN: { id: '4', name: 'Vegetarian', size: 30, price: 8.50, folded: true },
        HAWAII: { id: '5', name: 'Hawaii', size: 20, price: 10.00, folded: false }
    }
};
