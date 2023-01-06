// import assert from 'assert';
// import omit from '../src';

// describe('omit', () => {
//   it('should create a shallow copy', () => {
//     const benjy = { name: 'Benjy' };
//     const copy = omit(benjy, []);
//     assert.deepEqual(copy, benjy);
//     assert.notEqual(copy, benjy);
//   });

//   it('should drop fields which are passed in', () => {
//     const benjy = { name: 'Benjy', age: 18 };
//     assert.deepEqual(omit(benjy, ['age']), { name: 'Benjy' });
//     assert.deepEqual(omit(benjy, ['name', 'age']), {});
//   });
// });

/**
 *
 * jest单元测试术语:
 * 1.expect() 期望值
 * 2.toEqual() 比较两个对象
 */
import omit, { sum } from '../src';

describe('jest omit 测试', () => {
  it('should create a shallow copy', () => {
    const benjy = { name: 'Benyjy' };
    const copy = omit(benjy, []);
    expect(copy).toEqual(benjy);
  });

  it('should drop fileds which are passed in ', () => {
    const benjy = { name: 'Benjy', age: 18 };
    const target1 = omit(benjy, ['age']);
    const target2 = omit(benjy, ['age', 'name']);

    expect(target1).toEqual({ name: 'Benjy' });

    expect(target2).toEqual({});
  }),
    // 添加加法测试
    it('add function test', () => {
      expect(sum(3, 5)).toEqual(8);
    });
});
