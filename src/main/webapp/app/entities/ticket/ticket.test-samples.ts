import dayjs from 'dayjs/esm';

import { ITicket, NewTicket } from './ticket.model';

export const sampleWithRequiredData: ITicket = {
  id: 12568,
  title: 'actual',
};

export const sampleWithPartialData: ITicket = {
  id: 9476,
  title: 'shyly',
  description: 'phew',
  done: false,
};

export const sampleWithFullData: ITicket = {
  id: 14664,
  title: 'although aboard',
  description: 'march at',
  dueDate: dayjs('2025-08-31'),
  done: true,
};

export const sampleWithNewData: NewTicket = {
  title: 'wee devoted',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
