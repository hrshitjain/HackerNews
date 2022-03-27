import React from 'react';
import { fetchNewsIds, fetchNewsItem } from '../../../app/services/APIService';

const newsIds = [1, 2, 3, 4];
const newsItem = { title: 'Hello title'};

describe('test ApiService', () =>{ 
    it('test fetchNewsIds', async() =>
    {
        fetch = jest.fn(()=> Promise.resolve({
            json: () => Promise.resolve(newsIds)
        }))
        let apiResponse = await fetchNewsIds();
        expect(apiResponse).toEqual(newsIds);
    })

    it('test fetchNewsItem', async() =>
    {
        fetch = jest.fn(()=> Promise.resolve({
            json: () => Promise.resolve(newsItem)
        }))
        let apiResponse = await fetchNewsItem(newsIds[0]);
        expect(apiResponse).toEqual(newsItem);
    })
});