import { ParkMonitor } from "src/domain"

describe('domain/ParkMonitor', () => {
    test('Should instantiate a ParkMonitor successful without informing Id, CreateAt and UpdatedAt', () =>{
        const date = '2020-09-10';
        const pmsParkId = 165;
        const inputs = 35;
        const outputs = 30;
        const canceled = 10;
        const access = 65;
        const minInputTime = 3;
        const maxInputTime = 7;
        const avgInputTime = 4;
        const minOutputTime = 5;
        const maxOutputTime = 9;
        const avgOutputTime = 6;
        const minAmountDue = 5.5;
        const maxAmountDue = 90.87;
        const avgAmountDue = 15.35;

        const parkMonitor = new ParkMonitor(date, pmsParkId, inputs, outputs,
            canceled, access, minInputTime, maxInputTime, avgInputTime, minOutputTime,
            maxOutputTime, avgOutputTime, minAmountDue, maxAmountDue, avgAmountDue);

        expect(parkMonitor).toBeInstanceOf(ParkMonitor);
        expect(parkMonitor).toHaveProperty('id')
        expect(parkMonitor.id).toEqual(undefined)
        expect(parkMonitor.date).toEqual(new Date(date))        
        expect(parkMonitor.pmsParkId).toEqual(pmsParkId)
        expect(parkMonitor.inputs).toEqual(inputs)
        expect(parkMonitor.outputs).toEqual(outputs)
        expect(parkMonitor.canceled).toEqual(canceled)
        expect(parkMonitor.access).toEqual(access)
        expect(parkMonitor.minInputTime).toEqual(minInputTime)
        expect(parkMonitor.maxInputTime).toEqual(maxInputTime)
        expect(parkMonitor.avgInputTime).toEqual(avgInputTime)
        expect(parkMonitor.minAmountDue).toEqual(minAmountDue)
        expect(parkMonitor.maxAmountDue).toEqual(maxAmountDue)
        expect(parkMonitor.avgAmountDue).toEqual(avgAmountDue)
        expect(parkMonitor.createdAt).toEqual(null)
        expect(parkMonitor.updatedAt).toEqual(null)
        expect(parkMonitor).toHaveProperty('createdAt')
        expect(parkMonitor).toHaveProperty('updatedAt')

    })

    test('Should instance a ParkMonitor successful with a valid Id, CreateAt and UpdatedAt', () =>{
        const id = 987;
        const date = '2020-09-10';
        const pmsParkId = 165;
        const inputs = 35;
        const outputs = 30;
        const canceled = 10;
        const access = 65;
        const minInputTime = 3;
        const maxInputTime = 7;
        const avgInputTime = 4;
        const minOutputTime = 5;
        const maxOutputTime = 9;
        const avgOutputTime = 6;
        const minAmountDue = 5.5;
        const maxAmountDue = 90.87;
        const avgAmountDue = 15.35;
        const createdAt = '2020-09-10T01:02:03';
        const updatedAt = '2020-09-11T06:07:08';

        const parkMonitor = new ParkMonitor(date, pmsParkId, inputs, outputs,
            canceled, access, minInputTime, maxInputTime, avgInputTime, minOutputTime,
            maxOutputTime, avgOutputTime, minAmountDue, maxAmountDue, avgAmountDue, id, 
            createdAt, updatedAt);

        expect(parkMonitor).toBeInstanceOf(ParkMonitor);
        expect(parkMonitor.id).toEqual(id)
        expect(parkMonitor.createdAt).toEqual(new Date(createdAt))
        expect(parkMonitor.updatedAt).toEqual(new Date(updatedAt))
    })
})