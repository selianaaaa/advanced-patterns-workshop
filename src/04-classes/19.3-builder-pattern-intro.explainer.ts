import { Equal, Expect } from '../helpers/type-utils';

export class BuilderTuple<TList extends any[] = []> {
  list: TList;

  constructor() {
    this.list = [] as any;
  }

  push<TNum extends number>(num: TNum): BuilderTuple<[...TList, TNum]> {
    this.list.push(num);

    return this as unknown as BuilderTuple<[...TList, TNum]>;
  }

  unshift<TNum extends number>(num: TNum): BuilderTuple<[TNum, ...TList]> {
    this.list.unshift(num);

    return this as any;
  }
}

// const builderBeforePush: BuilderTuple<[]>
const builderBeforePush = new BuilderTuple();

// const listBeforePush: []
const listBeforePush = builderBeforePush.list;

// const builderAfterPush: BuilderTuple<[1, 2, 3]>
const builderAfterPush = builderBeforePush.push(1).push(2).push(3);

// const listAfterPush: [1, 2, 3]
const listAfterPush = builderAfterPush.list;

type tests = [
  Expect<Equal<typeof builderBeforePush, BuilderTuple<[]>>>,
  Expect<Equal<typeof listBeforePush, []>>,
  Expect<Equal<typeof builderAfterPush, BuilderTuple<[1, 2, 3]>>>,
  Expect<Equal<typeof listAfterPush, [1, 2, 3]>>
];
