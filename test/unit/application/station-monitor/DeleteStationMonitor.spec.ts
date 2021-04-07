import { DeleteStationMonitor } from "src/application";
import factory from "test/factory";

describe('application/DeleteStationMonitor', () => {
    let stubs;
    let fakeRepo;

    beforeEach(() => {
        stubs = factory.getStationMonitorStubs();
        fakeRepo = factory.getStationMonitorFakeRepo(stubs);
    })

    afterEach(() => jest.resetAllMocks())

    test('Should remove a StationMonitor entity', async () => {
        const deleteStationMonitor = new DeleteStationMonitor(fakeRepo);
        stubs.removeOneByStationIdAndDateAndTypePassage.mockResolvedValue();
        await deleteStationMonitor.invoke('123', '2020-01-01', 'INPUT')

        expect(fakeRepo.removeOneByStationIdAndDateAndTypePassage).toBeCalledTimes(1)

    })
})