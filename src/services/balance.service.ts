import { Injectable } from '@nestjs/common';
import axios from 'axios';

const apiKey = 'ckey_e52291d6e2dd46ba9999cb4e5a7';

@Injectable()
export class BalanceService {
    async getAggregateBalances(address: string) {
        const etherBalance = await axios.get(`https://api.covalenthq.com/v1/ethereum/balances/${address}`, {
            headers: {
                'x-api-key': apiKey
            }
        });

        const ftmBalance = await axios.get(`https://api.covalenthq.com/v1/fantom/balances/${address}`, {
            headers: {
                'x-api-key': apiKey
            }
        });

        const polyBalance = await axios.get(`https://api.covalenthq.com/v1/polygon/balances/${address}`, {
            headers: {
                'x-api-key': apiKey
            }
        });

        return {
            ether: etherBalance.data.balance,
            ftm: ftmBalance.data.balance,
            poly: polyBalance.data.balance
        };
    }
}
