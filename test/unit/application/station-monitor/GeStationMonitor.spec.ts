import { GetStationMonitor } from "src/application";
import factory from "test/factory";

describe('application/GetStationMonitor', () => {
    let stubs;
    let fakeRepo;

    beforeEach(() => {
        stubs = factory.getStationMonitorStubs();
        fakeRepo = factory.getStationMonitorFakeRepo(stubs);
    })

    afterEach(() => jest.resetAllMocks())

    test('Should get a StationMonitor entity', async () => {
        const getStationMonitor = new GetStationMonitor(fakeRepo);
        stubs.findOneByStationIdAndDateAndTypePassage.mockResolvedValue();
        await getStationMonitor.invoke('5', '2020-01-01', 'INPUT');

        expect(fakeRepo.findOneByStationIdAndDateAndTypePassage).toBeCalledTimes(1);

    })
})