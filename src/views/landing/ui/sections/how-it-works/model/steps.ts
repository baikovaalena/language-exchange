interface IStep {
  id: string;
  num: string;
  title: string;
  desc: string;
}

export const STEPS: IStep[] = [
  {
    id: 'create-profile',
    num: '01',
    title: 'Создайте профиль',
    desc: 'Укажите родной язык, цель и уровень. Это займёт меньше минуты.',
  },
  {
    id: 'find-partner',
    num: '02',
    title: 'Найдите партнёра',
    desc: 'Используйте фильтры или просматривайте рекомендации.',
  },
  {
    id: 'start-conversation',
    num: '03',
    title: 'Начните общение',
    desc: 'Напишите первое сообщение — и погрузитесь в живую практику.',
  },
];
