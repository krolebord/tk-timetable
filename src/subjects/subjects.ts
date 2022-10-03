import { addKeyToProperties } from './utils';

const subjectsDef = {
  КомпМоделювання: { label: 'Комп\'ютерне моделювання' },
  ПрикладиЗадачСтійкості: { label: 'Приклади задач стійкості' },
  ЧисельніМетоди: { label: 'Чисельні методи' },
  АналізДаних: { label: 'Аналіз данних' },
  ІнтелектуальнийАналізФінДанних: { label: 'Інтелектуальний аналіз фінансових даних' },
  БазиДаних: { label: 'Сучасні технології бази даних' },
  МатМетодиОбробкиІнформації: { label: 'Математичні методи обробки інформації' },
  МобільніПлатформи: { label: 'Операційні системи для мобільних платформ' },
  СтохастичніАлгоритми: { label: 'Стохастичні алгоритми' },
  ЮніксПлатформи: { label: 'Unix-подібні ОС' },

  АлгСтуктури: { label: 'Алгебраїчні структури даних' },
  ТеоріяПрограмування: { label: 'Теорія програмування' },
  НаукОбразСвіту: { label: 'Науковий образ світу' },
  СисПрограмування: { label: 'Системне програмування' },
  ПарадигмиПрограмування: { label: 'Парадигми програмування' },
  Філософія: { label: 'Філософія' },
};

export const subjects = addKeyToProperties(subjectsDef, 'slug');
export type SubjectName = keyof typeof subjects;
export type Subject = typeof subjects[SubjectName];


const subjectOptionsDef = {
  Set1: {
    label: 'Вибір 1',
    options: [subjects.ІнтелектуальнийАналізФінДанних, subjects.ПрикладиЗадачСтійкості, subjects.ЧисельніМетоди]
  },
  Set2: {
    label: 'Вибір 2',
    options: [subjects.АналізДаних, subjects.ІнтелектуальнийАналізФінДанних, subjects.БазиДаних, subjects.МатМетодиОбробкиІнформації]
  },
  Set3: {
    label: 'Вибір 3',
    options: [subjects.МобільніПлатформи, subjects.СтохастичніАлгоритми, subjects.ЮніксПлатформи]
  }
};

export const subjectOptions = addKeyToProperties(subjectOptionsDef, 'slug');
export type SubjectSetName = keyof typeof subjectOptions;
export type SubjectSet = typeof subjectOptions[SubjectSetName];
