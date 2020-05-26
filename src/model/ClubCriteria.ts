export interface Club {
  name: string;
  description: string;
  numberOfQuestions: number;
  timesTables: Array<number>;
  decimals: boolean;
  divisions: boolean;
}

export const DECIMAL_CLUB: Club = {
  name: "Decimal",
  description: "99 Questions on all tables including decimals",
  numberOfQuestions: 99,
  timesTables: [2, 3, 4, 5, 6, 7, 8, 9, 10],
  divisions: true,
  decimals: true,
};

export const CLUB_99: Club = {
  name: "99",
  description: "99 Questions on all tables",
  numberOfQuestions: 99,
  timesTables: [2, 3, 4, 5, 6, 7, 8, 9, 10],
  divisions: true,
  decimals: false,
};

export const CLUB_88: Club = {
  name: "88",
  description: "88 Questions on all tables except 9",
  numberOfQuestions: 88,
  timesTables: [2, 3, 4, 5, 6, 7, 8, 10],
  divisions: true,
  decimals: false,
};

export const CLUB_77: Club = {
  name: "77",
  description: "77 Questions on tables 2,3,4,5,6,7,10",
  numberOfQuestions: 77,
  timesTables: [2, 3, 4, 5, 6, 7, 10],
  divisions: true,
  decimals: false,
};
export const CLUB_66: Club = {
  name: "66",
  description: "66 Questions on tables 2,3,4,5,6,10",
  numberOfQuestions: 66,
  timesTables: [2, 3, 4, 5, 6, 10],
  divisions: true,
  decimals: false,
};
export const CLUB_55: Club = {
  name: "55",
  description: "55 Questions on tables 2,3,4,5,10",
  numberOfQuestions: 55,
  timesTables: [2, 3, 4, 5, 10],
  divisions: true,
  decimals: false,
};
export const CLUB_44: Club = {
  name: "44",
  description: "44 Questions on tables 2,3,4,5,10",
  numberOfQuestions: 44,
  timesTables: [2, 3, 4, 5, 10],
  divisions: true,
  decimals: false,
};
export const CLUB_33: Club = {
  name: "33",
  description: "33 Questions on tables 2,3,5,10",
  numberOfQuestions: 33,
  timesTables: [2, 3, 5, 10],
  divisions: true,
  decimals: false,
};
export const CLUB_22: Club = {
  name: "22",
  description: "22 Questions on tables 2,5,10",
  numberOfQuestions: 22,
  timesTables: [2, 5, 10],
  divisions: false,
  decimals: false,
};
export const CLUB_11: Club = {
  name: "11",
  description: "11 Questions on tables 2,5,10",
  numberOfQuestions: 11,
  timesTables: [2, 5, 10],
  divisions: false,
  decimals: false,
};
