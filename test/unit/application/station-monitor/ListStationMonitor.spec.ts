import { ListStationMonitor } from "src/application";
import factory from "test/factory";

describe('application/ListStationMonitor', () => {
    let stubs;
    let fakeRepo;

    beforeEach(() => {
        stubs = factory.getStationMonitorStubs();
        fakeRepo = factory.getStationMonitorFakeRepo(stubs);
    })

    afterEach(() => jest.resetAllMocks())

    test('Should list all StationMonitor entity', async () => {
        const listStationMonitor = new ListStationMonitor(fakeRepo);
        stubs.findAllPmsParkIdAndOrStationIdAndOrDateAndOrTypePassage.mockResolvedValue()
        listStationMonitor.invoke('123', '5', '2020-02-01', 'INPUT')

        expect(fakeRepo.findAllPmsParkIdAndOrStationIdAndOrDateAndOrTypePassage).toBeCalledTimes(1)
    })
})