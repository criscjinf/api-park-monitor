import { stat } from "fs"
import { StationMonitor } from "src/domain"

describe('domain/StationMonitor', () => {
    test('should instantiate a StationMonitor successfully  without informing Id, CreateAt and UpdatedAt', ()=> {
        const date = '2020-09-15'
        const pmsParkId = 123
        const stationId = 6
        const typePassage = 'INPUT'
        const passages = 115
        const canceled = 52
        const minPassageTime = 2
        const maxPassageTime = 10
        const avgPassageTime = 3

        const stationMonitor = new StationMonitor(date, pmsParkId, stationId, typePassage,
            passages, canceled, minPassageTime, maxPassageTime,  avgPassageTime)
        
        expect(stationMonitor).toBeInstanceOf(StationMonitor)
        expect(stationMonitor).toHaveProperty('id')
        expect(stationMonitor.id).toEqual(undefined)
        expect(stationMonitor.date).toEqual(new Date('2020-09-15'))
        expect(stationMonitor.pmsParkId).toEqual(123)
        expect(stationMonitor.stationId).toEqual(6)
        expect(stationMonitor.typePassage).toEqual('INPUT')
        expect(stationMonitor.passages).toEqual(115)
        expect(stationMonitor.canceled).toEqual(52)
        expect(stationMonitor.minPassageTime).toEqual(2)
        expect(stationMonitor.maxPassageTime).toEqual(10)
        expect(stationMonitor.avgPassageTime).toEqual(3)
        expect(stationMonitor).toHaveProperty('createdAt')
        expect(stationMonitor.createdAt).toEqual(null)
        expect(stationMonitor).toHaveProperty('updatedAt')
        expect(stationMonitor.updatedAt).toEqual(null)
    })

    test('should instantiate a StationMonitor successfully  with a valid Id, CreateAt and UpdatedAt', ()=> {
        const id = 14
        const date = '2020-09-15'
        const pmsParkId = 123
        const stationId = 6
        const typePassage = 'INPUT'
        const passages = 115
        const canceled = 52
        const minPassageTime = 2
        const maxPassageTime = 10
        const avgPassageTime = 3
        const createdAt = '2020-09-16T01:02:03'
        const updatedAt = '2020-09-17T03:04:05'

        const stationMonitor = new StationMonitor(date, pmsParkId, stationId, typePassage,
            passages, canceled, minPassageTime, maxPassageTime,  avgPassageTime, id,
            createdAt, updatedAt)
        
        expect(stationMonitor).toBeInstanceOf(StationMonitor)
        expect(stationMonitor.id).toEqual(14)        
        expect(stationMonitor.createdAt).toEqual(new Date('2020-09-16 01:02:03'))
        expect(stationMonitor.updatedAt).toEqual(new Date('2020-09-17 03:04:05'))
    })
})