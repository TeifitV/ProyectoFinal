import { calculateUncompletedTasks, getParseDate } from './../src/components/TaskHeader/tasksUtils';

describe('taksUtils Test', ()=> {

    describe('calculateUncompletedTasks', ()=>{
        it('should calculate uncompleted tasks', () => {
            const tasks = [
                {id: 1, completed: false},
                {id: 2, completed: true },
                {id: 3, completed: false},
                {id: 4, completed: false}
            ]
            expect(calculateUncompletedTasks(tasks)).toBe(3);
        });
    
        it('should calculate uncompleted tasks', () => {
            expect(calculateUncompletedTasks()).toBe(0);
        });
     });

    describe('getParseDate', ()=>{
        it('should get parse specific date', () => {
            expect( getParseDate('02-22-2019 13:00:00') ).toBe('VIERNES 22 FEBRERO 2019')
        })

        // it('should get parse current date', () => {
        //     expect( getParseDate() ).toBe('LUNES 25 FEBRERO 2019')
        // })
    })

})