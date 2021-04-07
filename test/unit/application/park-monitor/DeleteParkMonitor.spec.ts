import { DeleteParkMonitor } from "src/application";
import factory from "test/factory";

describe('application/DeleteParkMonitor', () => {
    let stubs;
    let fakeRepo;

    beforeEach(() => {
        stubs = factory.getParkMonitorStubs();
        fakeRepo = factory.getParkMonitorFakeRepo(stubs);
    })

    afterEach(() => jest.resetAllMocks())

    test('Should remove a ParkMonitor entity', async () => {
        const deleteParkMonitor = new DeleteParkMonitor(fakeRepo);
        stubs.removeOneByPmsParkIdAndDate.mockResolvedValue();
        await deleteParkMonitor.invoke('123', '2020-01-01')

        expect(fakeRepo.removeOneByPmsParkIdAndDate).toBeCalledTimes(1)

    })
})