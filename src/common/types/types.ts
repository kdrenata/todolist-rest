export type FieldError = {
  error: string;
  field: string;
};
//
// const getSum = (a: number, b: number): number => {
//   return a + b;
// }

export type BaseResponse<T> = {
  data: T; // string
  resultCode: number;
  messages: string[];
  fieldsErrors: FieldError[];
};
