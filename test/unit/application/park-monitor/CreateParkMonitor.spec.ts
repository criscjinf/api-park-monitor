import { CreateParkMonitor } from "src/application";
import { ParkMonitor } from "src/domain"
import factory from "test/factory";

const stubs = factory.getParkMonitorStubs();
const fakeRepository = factory.getParkMonitorFakeRepo(stubs);
const createParkMonitor = new CreateParkMonitor(fakeRepository)
const parkMonitorMock = factory.newParkMonitor();

const { date,
    pmsParkId,
    inputs,
    outputs,
    canceled,
    access,
    minInputTime,
    maxInputTime,
    avgInputTime,
    minOutputTime,
    maxOutputTime,
    avgOutputTime,
    minAmountDue,
    maxAmountDue,
    avgAmountDue } = parkMonitorMock


describe('application/CreateParkMonitor', () => {
    afterAll(() => jest.resetAllMocks())

    it('Should instantiate and save a ParkMonitor entity', async () => {
        stubs.insert.mockResolvedValue(parkMonitorMock);

        stubs.findOneByPmsParkIdAndDate.mockResolvedValue(null)
        const result = await createParkMonitor.invoke(date, pmsParkId, inputs, outputs,
            canceled, access, minInputTime, maxInputTime, avgInputTime, minOutputTime,
            maxOutputTime, avgOutputTime, minAmountDue, maxAmountDue, avgAmountDue);

        expect(result).toEqual(parkMonitorMock)
        expect(fakeRepository.insert).toHaveBeenCalledWith(new ParkMonitor(date, pmsParkId, inputs, outputs,
            canceled, access, minInputTime, maxInputTime, avgInputTime, minOutputTime,
            maxOutputTime, avgOutputTime, minAmountDue, maxAmountDue, avgAmountDue))
        
    })

    it('Should fail to save the same ParkMonitor twice', async () => {
        fakeRepository.insert = stubs.insert;
        stubs.findOneByPmsParkIdAndDate.mockResolvedValue(parkMonitorMock);
        try{
            const result = await createParkMonitor.invoke(date, pmsParkId, inputs, outputs,
                canceled, access, minInputTime, maxInputTime, avgInputTime, minOutputTime,
                maxOutputTime, avgOutputTime, minAmountDue, maxAmountDue, avgAmountDue);
            expect(result).toEqual(null);
        } catch (error) {
            expect(fakeRepository.insert).toBeCalledTimes(0);
            expect(error.message).toEqual(`[CreateParkMonitor] pmsParkId ${pmsParkId} already register the ${date} monitoring`)
        }

    })

})