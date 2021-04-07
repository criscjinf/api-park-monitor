import { GetParkMonitor } from "src/application";
import factory from "test/factory";

describe('application/GetParkMonitor', () => {
    let stubs;
    let fakeRepo;

    beforeEach(() => {
        stubs = factory.getParkMonitorStubs();
        fakeRepo = factory.getParkMonitorFakeRepo(stubs);
    });

    afterAll(() => jest.resetAllMocks());

    test('Should get a ParkMonitor entity', async () => {
        const getParkMonitor = new GetParkMonitor(fakeRepo);
        stubs.findOneByPmsParkIdAndDate.mockResolvedValue();
        await getParkMonitor.invoke('123', '2020-01-01');

        expect(fakeRepo.findOneByPmsParkIdAndDate).toBeCalledTimes(1);
    })
})