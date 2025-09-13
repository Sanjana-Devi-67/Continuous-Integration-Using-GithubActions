import sum from "./sum.js";
describe("test for sum function",()=>{
      test("adds 10+20=30",()=>{
        expect(sum(10,20)).toBe(30);
      })
      test("adds -10-20=-30",()=>{
        expect(sum(-10,-20)).toBe(-30);
     })
})
