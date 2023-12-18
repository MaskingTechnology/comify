
import { IdentityProvider } from './definitions/interfaces.js';
import { Identity } from './definitions/types.js';
import { NotFound } from './definitions/errors.js';

export default class Authentication
{
    #providers: Map<string, IdentityProvider> = new Map();

    registerProvider(name: string, provider: IdentityProvider): void
    {
        this.#providers.set(name, provider);
    }

    getProvider(name: string): IdentityProvider
    {
        const provider = this.#providers.get(name);

        if (provider === undefined)
        {
            throw new NotFound(`Identity provider "${name}" not found`);
        }

        return provider;
    }

    async getLoginUrl(provider: string): Promise<string>
    {
        const identityProvider = this.getProvider(provider);

        return identityProvider.getLoginUrl();
    }

    async login(provider: string, data: Record<string, unknown>): Promise<Identity>
    {
        const identityProvider = this.getProvider(provider);

        return identityProvider.login(data);
    }
}
