import { mock } from 'jest-mock-extended';
import { IParkMonitorRepository, ParkMonitor } from 'src/domain';
import factory from 'test/factory';

describe('domain/IParkMonitorRepository', () => {
    let mockIParkMonitorRepository;

    beforeEach(() => {
        mockIParkMonitorRepository = mock<IParkMonitorRepository>();
    })

    test('should have appropriated fields and types of IParkMonitorRepository', () => {
        const parkMonitor = factory.newParkMonitor();

        mockIParkMonitorRepository.insert(parkMonitor);
        mockIParkMonitorRepository.findOneByPmsParkIdAndDate(1, '2020-09-01');

        expect(mockIParkMonitorRepository.insert).toHaveBeenCalled();
        expect(mockIParkMonitorRepository.findOneByPmsParkIdAndDate).toHaveBeenCalled();
    })
})