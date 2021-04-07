import { ListParkMonitor } from "src/application";
import factory from "test/factory";

describe('application/ListParkMonitor', () => {
    let stubs;
    let fakeRepo;
    beforeEach(() => {
        stubs = factory.getParkMonitorStubs();
        fakeRepo = factory.getParkMonitorFakeRepo(stubs)
    })

    afterEach(() => jest.resetAllMocks())
    
    test('Should list all ParkMonitor entity', async () => {
        const listParkMonitor = new ListParkMonitor(fakeRepo);
        stubs.findAllByPmsParkIdOrDate.mockResolvedValue();
        await listParkMonitor.invoke('132', '');

        expect(fakeRepo.findAllByPmsParkIdOrDate).toBeCalledTimes(1);
    })
})